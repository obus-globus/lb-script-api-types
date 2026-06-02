import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelProgressivePromise } from '../../../io/netty/channel/ChannelProgressivePromise.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface ChannelOutboundInvoker extends Object{
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    close(): ChannelFuture;
    close(arg0: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): ChannelFuture;
    deregister(): ChannelFuture;
    deregister(arg0: ChannelPromise): ChannelFuture;
    disconnect(): ChannelFuture;
    disconnect(arg0: ChannelPromise): ChannelFuture;
    flush(): ChannelOutboundInvoker;
    newFailedFuture(arg0: Throwable): ChannelFuture;
    newProgressivePromise(): ChannelProgressivePromise;
    newPromise(): ChannelPromise;
    newSucceededFuture(): ChannelFuture;
    read(): ChannelOutboundInvoker;
    voidPromise(): ChannelPromise;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeAndFlush(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object, arg1: ChannelPromise): ChannelFuture;
}