import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Declaration } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Expression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Expression.d.ts'
export class MFDataModel$LocalDeclaration extends Object implements MFDataModel$Declaration {
    constructor(name: string, value: MFDataModel$Expression)
    name: string;
    value: MFDataModel$Expression;
}