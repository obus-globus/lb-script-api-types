import type { MFDataModel$Attribute } from '../../../../com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Expression } from '../../../../com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$FunctionRef } from '../../../../com/ibm/icu/message2/MFDataModel$FunctionRef.d.ts'
import type { MFDataModel$VariableRef } from '../../../../com/ibm/icu/message2/MFDataModel$VariableRef.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$VariableExpression extends Object implements MFDataModel$Expression {
    constructor(arg0: MFDataModel$VariableRef, arg1: MFDataModel$FunctionRef, arg2: MFDataModel$Attribute[])
    arg: MFDataModel$VariableRef;
    attributes: MFDataModel$Attribute[];
    function: MFDataModel$FunctionRef;
}