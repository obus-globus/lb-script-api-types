import type { ClosedChannelException } from '../../../../../java/nio/channels/ClosedChannelException.d.ts'
import type { CopyableThrowable } from '../../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class NettyHttp2Handler$Http2ClosedChannelException extends ClosedChannelException implements CopyableThrowable<NettyHttp2Handler$Http2ClosedChannelException> {
    constructor(errorCode: number)
    readonly errorCode: number;
    readonly message: string;
    createCopy(): NettyHttp2Handler$Http2ClosedChannelException;
}