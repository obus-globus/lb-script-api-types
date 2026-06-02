import type { ChannelOutboundBuffer } from '../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Channel$Unsafe extends Object{
    beginRead(): void;
    bind(arg0: SocketAddress, arg1: ChannelPromise): void;
    close(arg0: ChannelPromise): void;
    closeForcibly(): void;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
    deregister(arg0: ChannelPromise): void;
    disconnect(arg0: ChannelPromise): void;
    flush(): void;
    localAddress(): SocketAddress;
    outboundBuffer(): ChannelOutboundBuffer;
    recvBufAllocHandle(): RecvByteBufAllocator$Handle;
    register(arg0: (Object | null)[], arg1: ChannelPromise): void;
    remoteAddress(): SocketAddress;
    voidPromise(): ChannelPromise;
    write(arg0: Object, arg1: ChannelPromise): void;
}