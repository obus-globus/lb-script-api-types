import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HttpContent extends ByteBufHolder, HttpObject, Object{
    copy(): HttpContent;
    duplicate(): HttpContent;
    replace(arg0: ByteBuf): HttpContent;
    retain(): HttpContent;
    retain(arg0: number): HttpContent;
    retainedDuplicate(): HttpContent;
    touch(): HttpContent;
    touch(arg0: Object): HttpContent;
}