import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands.d.ts'
import type { NewAttributeBands$AttributeLayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$AttributeLayoutElement.d.ts'
export abstract class NewAttributeBands$LayoutElement extends Object implements NewAttributeBands$AttributeLayoutElement {
    constructor(null_: NewAttributeBands)
    addAttributeToBand(arg0: NewAttribute, arg1: InputStream): void;
    getLength(arg0: string): number;
    pack(arg0: OutputStream): void;
}