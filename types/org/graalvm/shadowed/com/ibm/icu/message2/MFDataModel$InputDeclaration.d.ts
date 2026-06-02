import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Declaration } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$VariableExpression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$VariableExpression.d.ts'
export class MFDataModel$InputDeclaration extends Object implements MFDataModel$Declaration {
    constructor(name: string, value: MFDataModel$VariableExpression)
    name: string;
    value: MFDataModel$VariableExpression;
}