import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { FullHttpMessage } from '../../../../../io/netty/handler/codec/http/FullHttpMessage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InboundHttp2ToHttpAdapter$ImmediateSendDetector extends Object{
    copyIfNeeded(arg0: ByteBufAllocator, arg1: FullHttpMessage): FullHttpMessage;
    mustSendImmediately(arg0: FullHttpMessage): boolean;
}