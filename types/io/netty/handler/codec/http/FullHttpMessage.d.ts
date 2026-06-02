import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FullHttpMessage extends HttpMessage, LastHttpContent, Object{
    copy(): FullHttpMessage;
    duplicate(): FullHttpMessage;
    replace(arg0: ByteBuf): FullHttpMessage;
    retain(): FullHttpMessage;
    retain(arg0: number): FullHttpMessage;
    retainedDuplicate(): FullHttpMessage;
    touch(): FullHttpMessage;
    touch(arg0: Object): FullHttpMessage;
}