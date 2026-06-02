import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/NewAttribute.d.ts'
export interface NewAttributeBands$AttributeLayoutElement extends Object{
    addToAttribute(arg0: number, arg1: NewAttribute): void;
    readBands(arg0: InputStream, arg1: number): void;
}