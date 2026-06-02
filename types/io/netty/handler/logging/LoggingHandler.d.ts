import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { ChannelDuplexHandler } from '../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ByteBufFormat } from '../../../../io/netty/handler/logging/ByteBufFormat.d.ts'
import type { LogLevel } from '../../../../io/netty/handler/logging/LogLevel.d.ts'
import type { InternalLogLevel } from '../../../../io/netty/util/internal/logging/InternalLogLevel.d.ts'
import type { InternalLogger } from '../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class LoggingHandler extends ChannelDuplexHandler {
    constructor()
    constructor(arg0: ByteBufFormat)
    constructor(arg0: LogLevel)
    constructor(arg0: LogLevel, arg1: ByteBufFormat)
    constructor(arg0: Class<Object>)
    constructor(arg0: Class<Object>, arg1: LogLevel)
    constructor(arg0: Class<Object>, arg1: LogLevel, arg2: ByteBufFormat)
    constructor(arg0: string)
    constructor(arg0: string, arg1: LogLevel)
    constructor(arg0: string, arg1: LogLevel, arg2: ByteBufFormat)
    // private byteBufFormat: ByteBufFormat;
    // private internalLevel: InternalLogLevel;
    // private level: LogLevel;
    // private logger: InternalLogger;
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    byteBufFormat(): ByteBufFormat;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelRegistered(arg0: ChannelHandlerContext): void;
    channelUnregistered(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    flush(arg0: ChannelHandlerContext): void;
    format(arg0: ChannelHandlerContext, arg1: string): string;
    format(arg0: ChannelHandlerContext, arg1: string, arg2: Object): string;
    format(arg0: ChannelHandlerContext, arg1: string, arg2: Object, arg3: Object): string;
    // private formatByteBuf(arg0: ChannelHandlerContext, arg1: string, arg2: ByteBuf): string;
    // private formatByteBufHolder(arg0: ChannelHandlerContext, arg1: string, arg2: ByteBufHolder): string;
    level(): LogLevel;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}