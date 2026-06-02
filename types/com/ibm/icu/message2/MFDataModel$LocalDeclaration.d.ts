import type { MFDataModel$Declaration } from '../../../../com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Expression } from '../../../../com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$LocalDeclaration extends Object implements MFDataModel$Declaration {
    constructor(arg0: string, arg1: MFDataModel$Expression)
    name: string;
    value: MFDataModel$Expression;
}