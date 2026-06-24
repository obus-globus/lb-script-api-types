import type { MFDataModel$Attribute } from '../../../../com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Expression } from '../../../../com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$FunctionRef } from '../../../../com/ibm/icu/message2/MFDataModel$FunctionRef.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$FunctionExpression extends Object implements MFDataModel$Expression {
    constructor(arg0: MFDataModel$FunctionRef, arg1: MFDataModel$Attribute[])
    attributes: MFDataModel$Attribute[];
    function: MFDataModel$FunctionRef;
}