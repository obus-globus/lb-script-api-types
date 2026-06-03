import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AFInputStream } from '../../../../org/newsclub/net/unix/AFInputStream.d.ts'
export class AFSocketImpl$AFInputStreamImpl extends AFInputStream {
    static nullInputStream(): InputStream;
    private constructor(null_: AFSocketImpl$AFInputStreamImpl)
    // private defaultOpt: number;
    // private eofReached: AtomicBoolean;
    // private streamClosed: boolean;
    available(): number;
    close(): void;
    // private forceCloseSocket(): void;
    getFileDescriptor(): FileDescriptor;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}