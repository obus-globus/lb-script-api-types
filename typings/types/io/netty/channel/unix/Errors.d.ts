import type { Errors$NativeIoException } from '../../../../io/netty/channel/unix/Errors$NativeIoException.d.ts'
import type { ClosedChannelException } from '../../../../java/nio/channels/ClosedChannelException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Errors extends Object {
    static ERRNO_EAGAIN_NEGATIVE: number;
    static ERRNO_EBADF_NEGATIVE: number;
    static ERRNO_ECONNRESET_NEGATIVE: number;
    static ERRNO_EINPROGRESS_NEGATIVE: number;
    static ERRNO_ENOENT_NEGATIVE: number;
    static ERRNO_ENOTCONN_NEGATIVE: number;
    static ERRNO_EPIPE_NEGATIVE: number;
    static ERRNO_EWOULDBLOCK_NEGATIVE: number;
    static ERROR_EALREADY_NEGATIVE: number;
    static ERROR_ECONNREFUSED_NEGATIVE: number;
    static ERROR_EHOSTUNREACH_NEGATIVE: number;
    static ERROR_EISCONN_NEGATIVE: number;
    static ERROR_ENETUNREACH_NEGATIVE: number;
    static handleConnectErrno(paramarg0: string, paramarg1: number): boolean;
    static ioResult(paramarg0: string, paramarg1: number): number;
    static ioResult(paramarg0: string, paramarg1: number, paramarg2: Errors$NativeIoException, paramarg3: ClosedChannelException): number;
    static newConnectionResetException(paramarg0: string, paramarg1: number): Errors$NativeIoException;
    static newIOException(paramarg0: string, paramarg1: number): Errors$NativeIoException;
    static throwConnectException(paramarg0: string, paramarg1: number): void;
    private constructor()
}