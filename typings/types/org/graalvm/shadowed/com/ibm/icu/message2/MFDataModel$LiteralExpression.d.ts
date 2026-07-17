import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Attribute } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Expression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$FunctionRef } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$FunctionRef.d.ts'
import type { MFDataModel$Literal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Literal.d.ts'
export class MFDataModel$LiteralExpression extends Object implements MFDataModel$Expression {
    constructor(arg: MFDataModel$Literal, function_: MFDataModel$FunctionRef, attributes: MFDataModel$Attribute[])
    arg: MFDataModel$Literal;
    attributes: MFDataModel$Attribute[];
    function: MFDataModel$FunctionRef;
}