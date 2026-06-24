import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$LayoutElement.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/NewAttribute.d.ts'
export class NewAttributeBands$Reference extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands, arg1: string)
    // private band: Object;
    // private length: number;
    readonly tag: string;
    addToAttribute(arg0: number, arg1: NewAttribute): void;
    getTag(): string;
    readBands(arg0: InputStream, arg1: number): void;
}