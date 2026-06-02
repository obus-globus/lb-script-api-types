import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Declaration } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Message } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModel$Pattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Pattern.d.ts'
export class MFDataModel$PatternMessage extends Object implements MFDataModel$Message {
    constructor(declarations: MFDataModel$Declaration[], pattern: MFDataModel$Pattern)
    declarations: MFDataModel$Declaration[];
    pattern: MFDataModel$Pattern;
}