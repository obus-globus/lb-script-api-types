import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { ConstantPoolEntry } from '../../../../../../org/apache/commons/compress/harmony/pack200/ConstantPoolEntry.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$LayoutElement.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class NewAttributeBands$Reference extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands, arg1: string)
    // private band: ConstantPoolEntry[];
    // private nullsAllowed: boolean;
    readonly tag: string;
    addAttributeToBand(arg0: NewAttribute, arg1: InputStream): void;
    getTag(): string;
    pack(arg0: OutputStream): void;
    renumberBci(arg0: IntList, arg1: JavaMap<Label, number>): void;
}