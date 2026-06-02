import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../../../java/nio/ByteOrder.d.ts'
import type { DoubleBuffer } from '../../../../../java/nio/DoubleBuffer.d.ts'
import type { ReadableByteChannel } from '../../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BinIO$DoubleDataNioInputWrapper extends Object implements DoubleIterator {
    constructor(arg0: ReadableByteChannel, arg1: ByteOrder)
    // private buffer: DoubleBuffer;
    // private byteBuffer: ByteBuffer;
    // private channel: ReadableByteChannel;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextDouble(): number;
    skip(arg0: number): number;
}