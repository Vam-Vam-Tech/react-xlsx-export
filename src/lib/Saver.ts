import { saveAs } from "file-saver";
import { ISaver } from "../types";

const saver = ({ name, file, type, extension }: ISaver) => {
	const data = new Blob([file], { type: type });
	saveAs(data, name + extension);
};

export default saver;
