import type { File } from '../../java/io/File.d.ts'
import type { FileDescriptor } from '../../java/io/FileDescriptor.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { FileChannel } from '../../java/nio/channels/FileChannel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FileOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: File)
    constructor(arg0: File, arg1: boolean)
    constructor(arg0: FileDescriptor)
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    readonly channel: FileChannel;
    // private closeLock: Object;
    // private closed: boolean;
    // private fd: FileDescriptor;
    // private path: string;
    close(): void;
    getChannel(): FileChannel;
    getFD(): FileDescriptor;
    // private open(arg0: string, arg1: boolean): void;
    // private open0(arg0: string, arg1: boolean): void;
    // private traceWrite(arg0: number, arg1: boolean): void;
    // private traceWriteBytes(arg0: number[], arg1: number, arg2: number, arg3: boolean): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private write(arg0: number, arg1: boolean): void;
    // private writeBytes(arg0: number[], arg1: number, arg2: number, arg3: boolean): void;
}