import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NewAttributeBands$AttributeLayoutElement } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$AttributeLayoutElement.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$LayoutElement.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/NewAttribute.d.ts'
export class NewAttributeBands$Callable extends Object implements NewAttributeBands$AttributeLayoutElement {
    constructor(arg0: NewAttributeBands$LayoutElement[])
    readonly body: NewAttributeBands$LayoutElement[];
    // private count: number;
    // private index: number;
    // private isBackwardsCallable: boolean;
    // private isFirstCallable: boolean;
    addCount(arg0: number): void;
    addNextToAttribute(arg0: NewAttribute): void;
    addToAttribute(arg0: number, arg1: NewAttribute): void;
    getBody(): NewAttributeBands$LayoutElement[];
    isBackwardsCallable(): boolean;
    readBands(arg0: InputStream, arg1: number): void;
    setBackwardsCallable(): void;
    setFirstCallable(arg0: boolean): void;
}