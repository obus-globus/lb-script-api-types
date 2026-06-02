import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../../../java/nio/ByteOrder.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { ReadableByteChannel } from '../../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BinIO$CharDataNioInputWrapper extends Object implements CharIterator {
    constructor(arg0: ReadableByteChannel, arg1: ByteOrder)
    // private buffer: CharBuffer;
    // private byteBuffer: ByteBuffer;
    // private channel: ReadableByteChannel;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): string;
    nextChar(): string;
    skip(arg0: number): number;
}