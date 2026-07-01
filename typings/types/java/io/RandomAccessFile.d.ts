import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { DataInput } from '../../java/io/DataInput.d.ts'
import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { File } from '../../java/io/File.d.ts'
import type { FileDescriptor } from '../../java/io/FileDescriptor.d.ts'
import type { FileChannel } from '../../java/nio/channels/FileChannel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class RandomAccessFile extends Object implements Closeable, DataInput, DataOutput {
    constructor(arg0: File, arg1: string)
    constructor(arg0: string, arg1: string)
    // private buffer: number[];
    readonly channel: FileChannel;
    // private closeLock: Object;
    // private closed: boolean;
    // private fd: FileDescriptor;
    // private path: string;
    // private rw: boolean;
    // private sync: boolean;
    close(): void;
    getChannel(): FileChannel;
    getFD(): FileDescriptor;
    getFilePointer(): number;
    // private implReadLine(): string;
    // private implWrite(arg0: number): void;
    // private implWriteBytes(arg0: number[], arg1: number, arg2: number): void;
    length(): number;
    // private length0(): number;
    // private open(arg0: string, arg1: number): void;
    // private open0(arg0: string, arg1: number): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private read0(): number;
    readBoolean(): boolean;
    readByte(): number;
    // private readBytes(arg0: number[], arg1: number, arg2: number): number;
    // private readBytes0(arg0: number[], arg1: number, arg2: number): number;
    readChar(): string;
    readDouble(): number;
    readFloat(): number;
    readFully(arg0: number[]): void;
    readFully(arg0: number[], arg1: number, arg2: number): void;
    readInt(): number;
    readLine(): string;
    readLong(): number;
    readShort(): number;
    readUTF(): string;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    seek(arg0: number): void;
    // private seek0(arg0: number): void;
    setLength(arg0: number): void;
    // private setLength0(arg0: number): void;
    skipBytes(arg0: number): number;
    // private traceImplWrite(arg0: number): void;
    // private traceImplWriteBytes(arg0: number[], arg1: number, arg2: number): void;
    // private traceRead0(): number;
    // private traceReadBytes0(arg0: number[], arg1: number, arg2: number): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private write0(arg0: number): void;
    writeBoolean(arg0: boolean): void;
    writeByte(arg0: number): void;
    // private writeBytes(arg0: number[], arg1: number, arg2: number): void;
    writeBytes(arg0: string): void;
    // private writeBytes0(arg0: number[], arg1: number, arg2: number): void;
    writeChar(arg0: number): void;
    writeChars(arg0: string): void;
    writeDouble(arg0: number): void;
    writeFloat(arg0: number): void;
    writeInt(arg0: number): void;
    writeLong(arg0: number): void;
    writeShort(arg0: number): void;
    writeUTF(arg0: string): void;
}