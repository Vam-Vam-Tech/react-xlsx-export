

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
var XLSX = require('xlsx');
var fileSaver = require('file-saver');

___$insertStyle(".react-xlsx-export-btn {\n  box-sizing: border-box;\n  appearance: none;\n  background-color: transparent;\n  border: 2px solid #2cc79d;\n  border-radius: 0.6em;\n  color: #2cc79d;\n  cursor: pointer;\n  display: flex;\n  align-self: center;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1;\n  margin: 20px;\n  padding: 1.2em 2.8em;\n  text-decoration: none;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;\n}\n.react-xlsx-export-btn:hover {\n  box-shadow: 0 0 40px 40px #2cc79d inset;\n}\n.react-xlsx-export-btn:focus {\n  color: #fff;\n  outline: 0;\n}");

var saver = function (_a) {
    var name = _a.name, file = _a.file, type = _a.type, extension = _a.extension;
    var data = new Blob([file], { type: type });
    fileSaver.saveAs(data, name + extension);
};

var exportExcel = function (_a) {
    var data = _a.data, name = _a.name;
    var fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    var fileExtension = ".xlsx";
    var ws = XLSX.utils.json_to_sheet(data);
    var wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    var excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saver({ name: name, file: excelBuffer, type: fileType, extension: fileExtension });
};

// import * as FileSaver from "file-saver";
var exportCsv = function (_a) {
    // let csvData: string = "";
    var data = _a.data, name = _a.name;
    var fileType = "data:text/plain;charset=utf-8";
    var fileExtension = ".csv";
    //   const deviceFiltererForCsv = () => {
    //     let csv: any = "";
    //     let headers = `${Object.keys(data[0]).join()},\r\n`;
    //     csv += headers;
    //     if (data.length > 0) {
    //       for (let i = 0; i < data.length; i++) {
    //         const tmpDevice: any = data[i];
    //         console.log(tmpDevice);
    //         csv += `${tmpDevice.firstName},${tmpDevice?.lastName},${tmpDevice?.email},\r\n`;
    //       }
    //     }
    //     return csv;
    //   };
    //   const exportToCsv = ({ jsonData, fileName }: any) => {
    //     const data = new Blob([jsonData], {
    //       type: "data:text/plain;charset=utf-8",
    //     });
    //     FileSaver.saveAs(data, fileName + ".csv");
    //   };
    //   const fn = async () => {
    //     const csvFormattedData = await deviceFiltererForCsv();
    //     exportToCsv({
    //       jsonData: csvFormattedData,
    //       fileName: "TEST",
    //     });
    //   };
    //   fn();
    saver({ name: name, file: data, type: fileType, extension: fileExtension });
};

var ReactXlsxExport = function (_a) {
    var data = _a.data, filename = _a.filename, className = _a.className, children = _a.children, exportType = _a.exportType, styles = _a.styles;
    var handleExport = function () {
        if (exportType === "csv") {
            exportCsv({ data: data, name: filename });
        }
        else {
            exportExcel({ data: data, name: filename });
        }
    };
    return (React.createElement("button", { className: className ? className : "react-xlsx-export-btn", style: styles, onClick: handleExport }, children ? children : "Export"));
};

exports.default = ReactXlsxExport;
exports.exportCsv = exportCsv;
exports.exportExcel = exportExcel;
//# sourceMappingURL=index.js.map
