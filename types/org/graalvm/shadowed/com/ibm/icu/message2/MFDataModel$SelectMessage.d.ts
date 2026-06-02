import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Declaration } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Expression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Message } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModel$Variant } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Variant.d.ts'
export class MFDataModel$SelectMessage extends Object implements MFDataModel$Message {
    constructor(declarations: MFDataModel$Declaration[], selectors: MFDataModel$Expression[], variants: MFDataModel$Variant[])
    declarations: MFDataModel$Declaration[];
    selectors: MFDataModel$Expression[];
    variants: MFDataModel$Variant[];
}