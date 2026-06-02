import type { MFDataModel$Declaration } from '../../../../com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Message } from '../../../../com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModel$Pattern } from '../../../../com/ibm/icu/message2/MFDataModel$Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$PatternMessage extends Object implements MFDataModel$Message {
    constructor(arg0: MFDataModel$Declaration[], arg1: MFDataModel$Pattern)
    declarations: MFDataModel$Declaration[];
    pattern: MFDataModel$Pattern;
}