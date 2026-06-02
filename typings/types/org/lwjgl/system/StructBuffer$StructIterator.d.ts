import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
export class StructBuffer$StructIterator<T extends Struct<T>> extends Object implements Iterator<T> {
    constructor(arg0: number, arg1: ByteBuffer, arg2: T, arg3: number, arg4: number)
    // private address: number;
    // private container: ByteBuffer;
    // private factory: T;
    // private fence: number;
    // private index: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
}