import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export interface NewAttributeBands$AttributeLayoutElement extends Object{
    addAttributeToBand(arg0: NewAttribute, arg1: InputStream): void;
    pack(arg0: OutputStream): void;
    renumberBci(arg0: IntList, arg1: Map<Label, number>): void;
}