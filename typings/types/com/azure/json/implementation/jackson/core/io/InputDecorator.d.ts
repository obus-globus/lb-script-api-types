import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class InputDecorator extends Object implements Serializable {
    constructor()
    decorate(arg0: IOContext, arg1: InputStream): InputStream;
    decorate(arg0: IOContext, arg1: Reader): Reader;
    decorate(arg0: IOContext, arg1: number[], arg2: number, arg3: number): InputStream;
}