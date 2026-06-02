import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../../../java/nio/ByteOrder.d.ts'
import type { FloatBuffer } from '../../../../../java/nio/FloatBuffer.d.ts'
import type { ReadableByteChannel } from '../../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BinIO$FloatDataNioInputWrapper extends Object implements FloatIterator {
    constructor(arg0: ReadableByteChannel, arg1: ByteOrder)
    // private buffer: FloatBuffer;
    // private byteBuffer: ByteBuffer;
    // private channel: ReadableByteChannel;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextFloat(): number;
    skip(arg0: number): number;
}