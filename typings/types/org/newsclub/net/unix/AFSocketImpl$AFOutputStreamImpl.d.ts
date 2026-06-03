import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { AFOutputStream } from '../../../../org/newsclub/net/unix/AFOutputStream.d.ts'
export class AFSocketImpl$AFOutputStreamImpl extends AFOutputStream {
    static nullOutputStream(): OutputStream;
    private constructor(null_: AFSocketImpl$AFOutputStreamImpl)
    // private defaultOpt: number;
    // private streamClosed: boolean;
    close(): void;
    // private forceCloseSocket(): void;
    getFileDescriptor(): FileDescriptor;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}