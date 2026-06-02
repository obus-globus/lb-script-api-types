import type { File } from '../../java/io/File.d.ts'
import type { FileDescriptor } from '../../java/io/FileDescriptor.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { FileChannel } from '../../java/nio/channels/FileChannel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FileInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: File)
    constructor(arg0: FileDescriptor)
    constructor(arg0: string)
    readonly channel: FileChannel;
    // private closeLock: Object;
    // private closed: boolean;
    // private fd: FileDescriptor;
    // private isRegularFile: boolean;
    // private path: string;
    available(): number;
    // private available0(): number;
    close(): void;
    getChannel(): FileChannel;
    getFD(): FileDescriptor;
    // private isRegularFile(): boolean;
    // private isRegularFile0(arg0: FileDescriptor): boolean;
    // private length(): number;
    // private length0(): number;
    // private open(arg0: string): void;
    // private open0(arg0: string): void;
    // private position(): number;
    // private position0(): number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private read0(): number;
    readAllBytes(): number[];
    // private readBytes(arg0: number[], arg1: number, arg2: number): number;
    readNBytes(arg0: number): number[];
    skip(arg0: number): number;
    // private skip0(arg0: number): number;
    // private traceRead0(): number;
    // private traceReadBytes(arg0: number[], arg1: number, arg2: number): number;
    transferTo(arg0: OutputStream): number;
}