import type { MFDataModel$Attribute } from '../../../../com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Expression } from '../../../../com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$FunctionRef } from '../../../../com/ibm/icu/message2/MFDataModel$FunctionRef.d.ts'
import type { MFDataModel$Literal } from '../../../../com/ibm/icu/message2/MFDataModel$Literal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$LiteralExpression extends Object implements MFDataModel$Expression {
    constructor(arg0: MFDataModel$Literal, arg1: MFDataModel$FunctionRef, arg2: MFDataModel$Attribute[])
    arg: MFDataModel$Literal;
    attributes: MFDataModel$Attribute[];
    function: MFDataModel$FunctionRef;
}