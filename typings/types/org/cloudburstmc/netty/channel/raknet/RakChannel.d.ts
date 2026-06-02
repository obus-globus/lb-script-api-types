import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { ChannelProgressivePromise } from '../../../../../io/netty/channel/ChannelProgressivePromise.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { RakChannelConfig } from '../../../../../org/cloudburstmc/netty/channel/raknet/config/RakChannelConfig.d.ts'
export interface RakChannel extends Channel, Object{
    alloc(): ByteBufAllocator;
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    bytesBeforeUnwritable(): number;
    bytesBeforeWritable(): number;
    close(): ChannelFuture;
    close(arg0: ChannelPromise): ChannelFuture;
    config(): RakChannelConfig;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): ChannelFuture;
    deregister(): ChannelFuture;
    deregister(arg0: ChannelPromise): ChannelFuture;
    disconnect(): ChannelFuture;
    disconnect(arg0: ChannelPromise): ChannelFuture;
    flush(): Channel;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    isWritable(): boolean;
    newFailedFuture(arg0: Throwable): ChannelFuture;
    newProgressivePromise(): ChannelProgressivePromise;
    newPromise(): ChannelPromise;
    newSucceededFuture(): ChannelFuture;
    rakPipeline(): Map$Entry<string, ChannelHandler>[];
    read(): Channel;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    voidPromise(): ChannelPromise;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    writeAndFlush(arg0: Object): ChannelFuture;
    writeAndFlush(arg0: Object, arg1: ChannelPromise): ChannelFuture;
}