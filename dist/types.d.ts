/// <reference types="react" />
export declare type IReactXlsxExport = {
    data: any;
    filename: string;
    className?: string;
    children?: JSX.Element;
    exportType?: "excel" | "csv";
    styles?: React.CSSProperties | undefined;
};
export interface ISaver {
    name: string;
    file: Blob | any;
    type: string;
    extension: string;
}
export interface JSONData {
    [k: string]: string;
}
export interface IExportExcel {
    data: JSONData[];
    name: string;
}
