import type { MFDataModel$Declaration } from '../../../../com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$VariableExpression } from '../../../../com/ibm/icu/message2/MFDataModel$VariableExpression.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$InputDeclaration extends Object implements MFDataModel$Declaration {
    constructor(arg0: string, arg1: MFDataModel$VariableExpression)
    name: string;
    value: MFDataModel$VariableExpression;
}