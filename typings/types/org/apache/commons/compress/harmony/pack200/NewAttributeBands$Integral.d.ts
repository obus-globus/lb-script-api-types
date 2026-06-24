import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BHSDCodec } from '../../../../../../org/apache/commons/compress/harmony/pack200/BHSDCodec.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$LayoutElement.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class NewAttributeBands$Integral extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands, arg1: string)
    constructor(null_: NewAttributeBands, arg1: string, arg2: NewAttributeBands$Integral)
    // private band: (Object | null)[];
    // private defaultCodec: BHSDCodec;
    // private previousIntegral: NewAttributeBands$Integral;
    // private previousPValue: number;
    readonly tag: string;
    addAttributeToBand(arg0: NewAttribute, arg1: InputStream): void;
    getTag(): string;
    latestValue(): number;
    pack(arg0: OutputStream): void;
    renumberBci(arg0: IntList, arg1: Map<Label, number>): void;
    // private renumberOffsetBci(arg0: (Object | null)[], arg1: IntList, arg2: Map<Label, number>): void;
}