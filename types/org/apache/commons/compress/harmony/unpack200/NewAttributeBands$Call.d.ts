import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { NewAttributeBands$Callable } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$Callable.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$LayoutElement.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/NewAttribute.d.ts'
export class NewAttributeBands$Call extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands$Call, arg1: number)
    readonly callable: NewAttributeBands$Callable;
    readonly callableIndex: number;
    addToAttribute(arg0: number, arg1: NewAttribute): void;
    getCallable(): NewAttributeBands$Callable;
    getCallableIndex(): number;
    readBands(arg0: InputStream, arg1: number): void;
    setCallable(arg0: NewAttributeBands$Callable): void;
}