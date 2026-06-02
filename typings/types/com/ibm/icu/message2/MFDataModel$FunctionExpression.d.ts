import type { MFDataModel$Attribute } from '../../../../com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Expression } from '../../../../com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Function } from '../../../../com/ibm/icu/message2/MFDataModel$Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$FunctionExpression extends Object implements MFDataModel$Expression {
    constructor(arg0: MFDataModel$Function, arg1: MFDataModel$Attribute[])
    attributes: MFDataModel$Attribute[];
    function: MFDataModel$Function;
}