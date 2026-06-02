import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class OutputDecorator extends Object implements Serializable {
    constructor()
    decorate(arg0: IOContext, arg1: OutputStream): OutputStream;
    decorate(arg0: IOContext, arg1: Writer): Writer;
}