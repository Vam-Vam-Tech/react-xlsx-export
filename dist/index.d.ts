import * as React from "react";
import "./styles.scss";
import { IReactXlsxExport } from "./types";
import exportExcel from "./lib/ExcelExport";
import exportCsv from "./lib/CsvExport";
declare const ReactXlsxExport: React.FC<IReactXlsxExport>;
export default ReactXlsxExport;
export { exportExcel, exportCsv };
