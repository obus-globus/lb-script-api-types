import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Attribute } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Expression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Markup$Kind } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Markup$Kind.d.ts'
import type { MFDataModel$Option } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Option.d.ts'
export class MFDataModel$Markup extends Object implements MFDataModel$Expression {
    constructor(kind: MFDataModel$Markup$Kind, name: string, options: JavaMap<string, MFDataModel$Option>, attributes: MFDataModel$Attribute[])
    attributes: MFDataModel$Attribute[];
    kind: MFDataModel$Markup$Kind;
    name: string;
    options: JavaMap<string, MFDataModel$Option>;
}