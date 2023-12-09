import localStorageClass from "./localStorageClass";
import { outputType } from "./optionDataType";
import downloadOutputClass from "./downloadOutputClass";

const optionDataOutputInterfaceMap = new Map([
    [outputType.download, downloadOutputClass],
]);

//localStorageのoptionDataに従い、出力に用いるoutputInterfaceの子クラスを返す
async function getOutputInterface() {
    const optiondata = await localStorageClass.getOptionData();
    console.log(optiondata);
    const t = optionDataOutputInterfaceMap.get(optiondata.outputType);
    console.log(t);
    if (!t) {
        throw new Error(
            `内部エラー: class extending outputInterface is not found for ${optiondata.outputType}`
        );
    }
    return t;
}

export default getOutputInterface;