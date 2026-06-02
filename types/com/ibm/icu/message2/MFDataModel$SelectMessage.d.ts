import type { MFDataModel$Declaration } from '../../../../com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Expression } from '../../../../com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Message } from '../../../../com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModel$Variant } from '../../../../com/ibm/icu/message2/MFDataModel$Variant.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$SelectMessage extends Object implements MFDataModel$Message {
    constructor(arg0: MFDataModel$Declaration[], arg1: MFDataModel$Expression[], arg2: MFDataModel$Variant[])
    declarations: MFDataModel$Declaration[];
    selectors: MFDataModel$Expression[];
    variants: MFDataModel$Variant[];
}