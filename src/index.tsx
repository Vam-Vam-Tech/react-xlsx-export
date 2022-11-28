import * as React from "react";
import "./styles.scss";
import { IReactXlsxExport } from "./types";
import exportExcel from "./lib/ExcelExport";
import exportCsv from "./lib/CsvExport";

const ReactXlsxExport: React.FC<IReactXlsxExport> = ({
	data,
	filename,
	className,
	children,
	exportType,
	styles,
}) => {
	const handleExport = () => {
		if (exportType === "csv") {
			exportCsv({ data: data, name: filename });
		} else {
			exportExcel({ data: data, name: filename });
		}
	};

	return (
		<button
			className={className ? className : "react-xlsx-export-btn"}
			style={styles}
			onClick={handleExport}
		>
			{children ? children : "Export"}
		</button>
	);
};

export default ReactXlsxExport;
export { exportExcel, exportCsv };
