import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$LayoutElement.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class NewAttributeBands$UnionCase extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands, arg1: number[])
    constructor(null_: NewAttributeBands, arg1: number[], arg2: NewAttributeBands$LayoutElement[])
    readonly body: NewAttributeBands$LayoutElement[];
    // private tags: number[];
    addAttributeToBand(arg0: NewAttribute, arg1: InputStream): void;
    getBody(): NewAttributeBands$LayoutElement[];
    hasTag(arg0: number): boolean;
    pack(arg0: OutputStream): void;
    renumberBci(arg0: IntList, arg1: Map<Label, number>): void;
}