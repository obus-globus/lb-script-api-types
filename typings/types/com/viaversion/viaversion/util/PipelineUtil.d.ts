import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { MessageToByteEncoder } from '../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { MessageToMessageDecoder } from '../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class PipelineUtil extends Object {
    static callDecode(paramarg0: ByteToMessageDecoder, paramarg1: ChannelHandlerContext, paramarg2: Object): Object[];
    static callDecode(paramarg0: MessageToMessageDecoder<Object>, paramarg1: ChannelHandlerContext, paramarg2: Object): Object[];
    static callEncode(paramarg0: MessageToByteEncoder<Object>, paramarg1: ChannelHandlerContext, paramarg2: Object, paramarg3: ByteBuf): void;
    static containsCause(paramarg0: Throwable, paramarg1: Class<Object>): boolean;
    static getCause<T extends unknown>(paramarg0: Throwable, paramarg1: Class<T>): T;
    static getContextBefore(paramarg0: string, paramarg1: Map$Entry<string, ChannelHandler>[]): ChannelHandlerContext;
    static getPreviousContext(paramarg0: string, paramarg1: Map$Entry<string, ChannelHandler>[]): ChannelHandlerContext;
    constructor()
}