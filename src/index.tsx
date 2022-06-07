import * as React from "react";
import "./styles.scss";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export type IReactXlsxExport = {
	data: any;
	filename: string;
	className?: string;
	children?: JSX.Element;
};

const ReactXlsxExport: React.FC<IReactXlsxExport> = ({
	data,
	filename,
	className,
	children,
}) => {
	const fileType =
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	const fileExtension = ".xlsx";

	const exportToCSV = ({ csvData, fileName }: any) => {
		const ws = XLSX.utils.json_to_sheet(csvData);
		const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
		const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
		const data = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(data, fileName + fileExtension);
	};

	return (
		<button
			className={className ? className : "button"}
			onClick={() => exportToCSV({ csvData: data, fileName: filename })}
		>
			{children ? children : "Download Excel"}
		</button>
	);
};

export default ReactXlsxExport;
