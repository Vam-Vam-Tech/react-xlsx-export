import * as FileSaver from "file-saver";
import { IExportExcel } from "../types";
import saver from "./Saver";

const exportCsv = ({ data, name }: IExportExcel) => {
  // let csvData: string = "";

  const fileType = "data:text/plain;charset=utf-8";
  const fileExtension = ".csv";

  const deviceFiltererForCsv = () => {
    let csv: any = "";
    let headers = `${Object.keys(data[0]).join()},\r\n`;
    csv += headers;
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const tmpDevice: any = data[i];
        console.log(tmpDevice);
        csv += `${tmpDevice.firstName},${tmpDevice?.lastName},${tmpDevice?.email},\r\n`;
      }
    }
    return csv;
  };

  const exportToCsv = ({ jsonData, fileName }: any) => {
    const data = new Blob([jsonData], {
      type: "data:text/plain;charset=utf-8",
    });

    FileSaver.saveAs(data, fileName + ".csv");
  };

  const fn = async () => {
    const csvFormattedData = await deviceFiltererForCsv();

    exportToCsv({
      jsonData: csvFormattedData,
      fileName: "TEST",
    });
  };

  fn();

  saver({ name, file: data, type: fileType, extension: fileExtension });
};

export default exportCsv;
