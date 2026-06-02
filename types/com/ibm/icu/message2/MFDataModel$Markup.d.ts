import type { MFDataModel$Attribute } from '../../../../com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Expression } from '../../../../com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Markup$Kind } from '../../../../com/ibm/icu/message2/MFDataModel$Markup$Kind.d.ts'
import type { MFDataModel$Option } from '../../../../com/ibm/icu/message2/MFDataModel$Option.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModel$Markup extends Object implements MFDataModel$Expression {
    constructor(arg0: MFDataModel$Markup$Kind, arg1: string, arg2: { [key: string]: MFDataModel$Option }, arg3: MFDataModel$Attribute[])
    attributes: MFDataModel$Attribute[];
    kind: MFDataModel$Markup$Kind;
    name: string;
    options: { [key: string]: MFDataModel$Option };
}