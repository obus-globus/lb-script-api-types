import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Attribute } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Expression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$FunctionRef } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$FunctionRef.d.ts'
export class MFDataModel$FunctionExpression extends Object implements MFDataModel$Expression {
    constructor(function_: MFDataModel$FunctionRef, attributes: MFDataModel$Attribute[])
    attributes: MFDataModel$Attribute[];
    function: MFDataModel$FunctionRef;
}