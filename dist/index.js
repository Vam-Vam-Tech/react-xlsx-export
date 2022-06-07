

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var FileSaver = require('file-saver');
var XLSX = require('xlsx');

___$insertStyle(".button {\n  --bg-color: #f3f3f3;\n  --base-color: #666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  width: 70px;\n  margin: 10% auto;\n  border: 3px solid var(--base-color);\n  border-radius: 5px;\n  color: var(--base-color);\n  background-color: var(--bg-color);\n  cursor: pointer;\n  overflow: hidden;\n}\n.button:hover {\n  color: var(--bg-color);\n  background-color: var(--base-color);\n  border-color: var(--bg-color);\n}");

var ReactXlsxExport = function (_a) {
    var data = _a.data, filename = _a.filename, className = _a.className, children = _a.children;
    var fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    var fileExtension = ".xlsx";
    var exportToCSV = function (_a) {
        var csvData = _a.csvData, fileName = _a.fileName;
        var ws = XLSX.utils.json_to_sheet(csvData);
        var wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        var excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        var data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };
    return (React.createElement("button", { className: className ? className : "button", onClick: function () { return exportToCSV({ csvData: data, fileName: filename }); } }, children ? children : "Download Excel"));
};

exports.default = ReactXlsxExport;
//# sourceMappingURL=index.js.map
