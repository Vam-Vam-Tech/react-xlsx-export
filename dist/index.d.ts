import * as React from "react";
import "./styles.scss";
export declare type IReactXlsxExport = {
    data: any;
    filename: string;
    className?: string;
    children?: JSX.Element;
};
declare const ReactXlsxExport: React.FC<IReactXlsxExport>;
export default ReactXlsxExport;
