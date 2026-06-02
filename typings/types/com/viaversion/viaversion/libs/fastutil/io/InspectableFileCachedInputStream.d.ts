import type { MeasurableInputStream } from '../../../../../../com/viaversion/viaversion/libs/fastutil/io/MeasurableInputStream.d.ts'
import type { RepositionableStream } from '../../../../../../com/viaversion/viaversion/libs/fastutil/io/RepositionableStream.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { RandomAccessFile } from '../../../../../../java/io/RandomAccessFile.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { FileChannel } from '../../../../../../java/nio/channels/FileChannel.d.ts'
import type { WritableByteChannel } from '../../../../../../java/nio/channels/WritableByteChannel.d.ts'
export class InspectableFileCachedInputStream extends MeasurableInputStream implements RepositionableStream, WritableByteChannel {
    static DEBUG: boolean;
    static DEFAULT_BUFFER_SIZE: number;
    static nullInputStream(): InputStream;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: File)
    buffer: number[];
    // private fileChannel: FileChannel;
    inspectable: number;
    // private mark: number;
    // private overflowFile: File;
    // private position: number;
    // private randomAccessFile: RandomAccessFile;
    // private writePosition: number;
    available(): number;
    clear(): void;
    close(): void;
    dispose(): void;
    // private ensureOpen(): void;
    finalize(): void;
    isOpen(): boolean;
    length(): number;
    mark(arg0: number): void;
    markSupported(): boolean;
    position(): number;
    position(arg0: number): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reopen(): void;
    reset(): void;
    skip(arg0: number): number;
    truncate(arg0: number): void;
    write(arg0: ByteBuffer): number;
}