import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { WritableByteChannel } from '../../../../../java/nio/channels/WritableByteChannel.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FixedLengthBlockOutputStream$BufferAtATimeOutputChannel extends Object implements WritableByteChannel {
    constructor(arg0: OutputStream, arg1: any)
    // private closed: AtomicBoolean;
    // private out: OutputStream;
    close(): void;
    isOpen(): boolean;
    write(arg0: ByteBuffer): number;
}