import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$LayoutElement.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/NewAttribute.d.ts'
export class NewAttributeBands$UnionCase extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands$UnionCase)
    constructor(null_: NewAttributeBands$UnionCase, arg2: NewAttributeBands$LayoutElement[])
    readonly body: NewAttributeBands$LayoutElement[];
    // private tags: number[];
    addToAttribute(arg0: number, arg1: NewAttribute): void;
    getBody(): NewAttributeBands$LayoutElement[];
    hasTag(arg0: number): boolean;
    hasTag(arg0: number): boolean;
    readBands(arg0: InputStream, arg1: number): void;
}