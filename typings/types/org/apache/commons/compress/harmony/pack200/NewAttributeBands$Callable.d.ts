import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands.d.ts'
import type { NewAttributeBands$AttributeLayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$AttributeLayoutElement.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$LayoutElement.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class NewAttributeBands$Callable extends Object implements NewAttributeBands$AttributeLayoutElement {
    constructor(null_: NewAttributeBands, arg1: NewAttributeBands$LayoutElement[])
    readonly backwardsCallableIndex: number;
    readonly body: NewAttributeBands$LayoutElement[];
    // private isBackwardsCallable: boolean;
    addAttributeToBand(arg0: NewAttribute, arg1: InputStream): void;
    addBackwardsCall(): void;
    getBody(): NewAttributeBands$LayoutElement[];
    isBackwardsCallable(): boolean;
    pack(arg0: OutputStream): void;
    renumberBci(arg0: IntList, arg1: Map<Label, number>): void;
    setBackwardsCallable(): void;
    setBackwardsCallableIndex(arg0: number): void;
}