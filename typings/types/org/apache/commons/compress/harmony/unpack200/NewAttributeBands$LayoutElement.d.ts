import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NewAttributeBands$AttributeLayoutElement } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$AttributeLayoutElement.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/NewAttribute.d.ts'
export abstract class NewAttributeBands$LayoutElement extends Object implements NewAttributeBands$AttributeLayoutElement {
    private constructor()
    addToAttribute(arg0: number, arg1: NewAttribute): void;
    getLength(arg0: string): number;
    readBands(arg0: InputStream, arg1: number): void;
}