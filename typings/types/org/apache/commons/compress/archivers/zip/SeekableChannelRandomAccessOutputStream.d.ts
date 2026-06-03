import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { RandomAccessOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/RandomAccessOutputStream.d.ts'
export class SeekableChannelRandomAccessOutputStream extends RandomAccessOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: SeekableByteChannel)
    // private channel: SeekableByteChannel;
    close(): void;
    position(): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    writeAll(arg0: number[], arg1: number, arg2: number, arg3: number): void;
    writeAll(arg0: number[], arg1: number): void;
}