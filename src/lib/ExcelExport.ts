import * as XLSX from "xlsx";
import { IExportExcel } from "../types";
import saver from "./Saver";

const exportExcel = ({ data, name }: IExportExcel) => {
	const fileType =
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	const fileExtension = ".xlsx";
	const ws = XLSX.utils.json_to_sheet(data);
	const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
	const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
	saver({ name, file: excelBuffer, type: fileType, extension: fileExtension });
};

export default exportExcel;
