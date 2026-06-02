import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { WritableByteChannel } from '../../../../../java/nio/channels/WritableByteChannel.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
export class FixedLengthBlockOutputStream extends OutputStream implements WritableByteChannel {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream, arg1: number)
    constructor(arg0: WritableByteChannel, arg1: number)
    // private blockSize: number;
    // private buffer: ByteBuffer;
    // private closed: AtomicBoolean;
    // private out: WritableByteChannel;
    close(): void;
    flushBlock(): void;
    isOpen(): boolean;
    // private maybeFlush(): void;
    // private padBlock(): void;
    write(arg0: ByteBuffer): number;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeBlock(): void;
}