import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Attribute } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Expression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$FunctionAnnotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$FunctionAnnotation.d.ts'
export class MFDataModel$FunctionExpression extends Object implements MFDataModel$Expression {
    constructor(annotation: MFDataModel$FunctionAnnotation, attributes: MFDataModel$Attribute[])
    annotation: MFDataModel$FunctionAnnotation;
    attributes: MFDataModel$Attribute[];
}