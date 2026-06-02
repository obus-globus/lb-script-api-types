import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SeekableInMemoryByteChannel extends Object implements SeekableByteChannel {
    constructor()
    constructor(arg0: number[])
    constructor(arg0: number)
    // private closed: AtomicBoolean;
    // private data: number[];
    // private position: number;
    // private size: number;
    array(): number[];
    close(): void;
    // private ensureOpen(): void;
    isOpen(): boolean;
    position(): number;
    position(arg0: number): SeekableByteChannel;
    read(arg0: ByteBuffer): number;
    // private resize(arg0: number): void;
    size(): number;
    truncate(arg0: number): SeekableByteChannel;
    write(arg0: ByteBuffer): number;
}