import { IExportExcel } from "../types";
import saver from "./Saver";

const exportCsv = ({ data, name }: IExportExcel) => {
	// let csvData: string = "";

	const fileType = "data:text/plain;charset=utf-8";
	const fileExtension = ".csv";
	saver({ name, file: data, type: fileType, extension: fileExtension });
};

export default exportCsv;
