import type { AbstractNioByteChannel$NioByteUnsafe } from '../../../../../io/netty/channel/nio/AbstractNioByteChannel$NioByteUnsafe.d.ts'
import type { NioSocketChannel } from '../../../../../io/netty/channel/socket/nio/NioSocketChannel.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
export class NioSocketChannel$NioSocketChannelUnsafe extends AbstractNioByteChannel$NioByteUnsafe {
    constructor(null_: NioSocketChannel, arg1: () => void)
    prepareToClose(): Executor;
}