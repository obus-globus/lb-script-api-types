import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands.d.ts'
import type { NewAttributeBands$Integral } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$Integral.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$LayoutElement.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/NewAttribute.d.ts'
export class NewAttributeBands$Replication extends NewAttributeBands$LayoutElement {
    constructor(null_: NewAttributeBands, arg1: string, arg2: string)
    readonly countElement: NewAttributeBands$Integral;
    readonly layoutElements: NewAttributeBands$LayoutElement[];
    addToAttribute(arg0: number, arg1: NewAttribute): void;
    getCountElement(): NewAttributeBands$Integral;
    getLayoutElements(): NewAttributeBands$LayoutElement[];
    readBands(arg0: InputStream, arg1: number): void;
}