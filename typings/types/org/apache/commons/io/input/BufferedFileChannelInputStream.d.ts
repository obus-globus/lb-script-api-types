import type { BufferedFileChannelInputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { FileChannel } from '../../../../../java/nio/channels/FileChannel.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BufferedFileChannelInputStream$Builder } from '../../../../../org/apache/commons/io/input/BufferedFileChannelInputStream$Builder.d.ts'
export class BufferedFileChannelInputStream extends InputStream {
    static builder(): BufferedFileChannelInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: File)
    constructor(arg0: File, arg1: number)
    constructor(arg0: Path[])
    constructor(arg0: Path[], arg1: number)
    private constructor(arg0: BufferedFileChannelInputStream$Builder)
    constructor(arg0: BufferedFileChannelInputStream$Builder, arg1: BufferedFileChannelInputStream$1)
    // private byteBuffer: ByteBuffer;
    // private fileChannel: FileChannel;
    available(): number;
    // private clean(arg0: ByteBuffer): void;
    // private cleanDirectBuffer(arg0: ByteBuffer): void;
    close(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private refill(): boolean;
    skip(arg0: number): number;
    // private skipFromFileChannel(arg0: number): number;
}