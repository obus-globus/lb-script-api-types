import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { MFDataModel$Option } from '../../../../com/ibm/icu/message2/MFDataModel$Option.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$FunctionRef extends Object {
    constructor(arg0: string, arg1: JavaMap<string, MFDataModel$Option>)
    name: string;
    options: JavaMap<string, MFDataModel$Option>;
}