import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands.d.ts'
import type { NewAttributeBands$Integral } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$Integral.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$LayoutElement.d.ts'
import type { NewAttributeBands$UnionCase } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$UnionCase.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/NewAttribute.d.ts'
export class NewAttributeBands$Union extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands, arg1: string, arg2: NewAttributeBands$UnionCase[], arg3: NewAttributeBands$LayoutElement[])
    // private caseCounts: number[];
    readonly defaultCaseBody: NewAttributeBands$LayoutElement[];
    // private defaultCount: number;
    readonly unionCases: NewAttributeBands$UnionCase[];
    readonly unionTag: NewAttributeBands$Integral;
    addToAttribute(arg0: number, arg1: NewAttribute): void;
    getDefaultCaseBody(): NewAttributeBands$LayoutElement[];
    getUnionCases(): NewAttributeBands$UnionCase[];
    getUnionTag(): NewAttributeBands$Integral;
    readBands(arg0: InputStream, arg1: number): void;
}