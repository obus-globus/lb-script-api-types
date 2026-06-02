import type { MFDataModel$Attribute } from '../../../../com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Expression } from '../../../../com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Function } from '../../../../com/ibm/icu/message2/MFDataModel$Function.d.ts'
import type { MFDataModel$Literal } from '../../../../com/ibm/icu/message2/MFDataModel$Literal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$LiteralExpression extends Object implements MFDataModel$Expression {
    constructor(arg0: MFDataModel$Literal, arg1: MFDataModel$Function, arg2: MFDataModel$Attribute[])
    arg: MFDataModel$Literal;
    attributes: MFDataModel$Attribute[];
    function: MFDataModel$Function;
}