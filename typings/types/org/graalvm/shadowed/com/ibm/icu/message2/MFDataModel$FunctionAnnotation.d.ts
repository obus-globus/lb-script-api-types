import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Annotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Annotation.d.ts'
import type { MFDataModel$Option } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Option.d.ts'
export class MFDataModel$FunctionAnnotation extends Object implements MFDataModel$Annotation {
    constructor(name: string, options: JavaMap<string, MFDataModel$Option>)
    name: string;
    options: JavaMap<string, MFDataModel$Option>;
}