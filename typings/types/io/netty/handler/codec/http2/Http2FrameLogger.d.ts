import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerAdapter } from '../../../../../io/netty/channel/ChannelHandlerAdapter.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2Flags } from '../../../../../io/netty/handler/codec/http2/Http2Flags.d.ts'
import type { Http2FrameLogger$Direction } from '../../../../../io/netty/handler/codec/http2/Http2FrameLogger$Direction.d.ts'
import type { LogLevel } from '../../../../../io/netty/handler/logging/LogLevel.d.ts'
import type { InternalLogLevel } from '../../../../../io/netty/util/internal/logging/InternalLogLevel.d.ts'
import type { InternalLogger } from '../../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2FrameLogger extends ChannelHandlerAdapter {
    constructor(arg0: LogLevel)
    constructor(arg0: LogLevel, arg1: Class<Object>)
    constructor(arg0: LogLevel, arg1: string)
    // private level: InternalLogLevel;
    // private logger: InternalLogger;
    isEnabled(): boolean;
    logData(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number, arg3: ByteBuf, arg4: number, arg5: boolean): void;
    logGoAway(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number, arg3: number, arg4: ByteBuf): void;
    logHeaders(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number, arg3: (Object | null)[], arg4: number, arg5: boolean): void;
    logHeaders(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number, arg3: (Object | null)[], arg4: number, arg5: number, arg6: boolean, arg7: number, arg8: boolean): void;
    logPing(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number): void;
    logPingAck(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number): void;
    logPriority(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
    logPushPromise(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number, arg3: number, arg4: (Object | null)[], arg5: number): void;
    logRstStream(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number, arg3: number): void;
    logSettings(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: JavaMap<any, any>): void;
    logSettingsAck(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext): void;
    logUnknownFrame(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number, arg3: number, arg4: Http2Flags, arg5: ByteBuf): void;
    logWindowsUpdate(arg0: Http2FrameLogger$Direction, arg1: ChannelHandlerContext, arg2: number, arg3: number): void;
    toString(): string;
    // private toString(arg0: ByteBuf): string;
}