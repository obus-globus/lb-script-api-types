import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { NewAttributeBands$Callable } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$Callable.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$LayoutElement.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class NewAttributeBands$Call extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands$Call, arg1: number)
    readonly callable: NewAttributeBands$Callable;
    readonly callableIndex: number;
    addAttributeToBand(arg0: NewAttribute, arg1: InputStream): void;
    getCallable(): NewAttributeBands$Callable;
    getCallableIndex(): number;
    pack(arg0: OutputStream): void;
    renumberBci(arg0: IntList, arg1: Map<Label, number>): void;
    setCallable(arg0: NewAttributeBands$Callable): void;
}