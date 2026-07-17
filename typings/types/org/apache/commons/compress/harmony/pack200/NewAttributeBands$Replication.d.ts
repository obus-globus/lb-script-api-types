import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands.d.ts'
import type { NewAttributeBands$Integral } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$Integral.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$LayoutElement.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class NewAttributeBands$Replication extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands, arg1: string, arg2: string)
    readonly countElement: NewAttributeBands$Integral;
    readonly layoutElements: NewAttributeBands$LayoutElement[];
    addAttributeToBand(arg0: NewAttribute, arg1: InputStream): void;
    getCountElement(): NewAttributeBands$Integral;
    getLayoutElements(): NewAttributeBands$LayoutElement[];
    pack(arg0: OutputStream): void;
    renumberBci(arg0: IntList, arg1: JavaMap<Label, number>): void;
}