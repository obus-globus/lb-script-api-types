import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands.d.ts'
import type { NewAttributeBands$Integral } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$Integral.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$LayoutElement.d.ts'
import type { NewAttributeBands$UnionCase } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$UnionCase.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class NewAttributeBands$Union extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands, arg1: string, arg2: NewAttributeBands$UnionCase[], arg3: NewAttributeBands$LayoutElement[])
    readonly defaultCaseBody: NewAttributeBands$LayoutElement[];
    readonly unionCases: NewAttributeBands$UnionCase[];
    readonly unionTag: NewAttributeBands$Integral;
    addAttributeToBand(arg0: NewAttribute, arg1: InputStream): void;
    getDefaultCaseBody(): NewAttributeBands$LayoutElement[];
    getUnionCases(): NewAttributeBands$UnionCase[];
    getUnionTag(): NewAttributeBands$Integral;
    pack(arg0: OutputStream): void;
    renumberBci(arg0: IntList, arg1: Map<Label, number>): void;
}