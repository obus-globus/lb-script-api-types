import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ReferenceCounted } from '../../../io/netty/util/ReferenceCounted.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ByteBufHolder extends ReferenceCounted, Object{
    content(): ByteBuf;
    copy(): ByteBufHolder;
    duplicate(): ByteBufHolder;
    replace(arg0: ByteBuf): ByteBufHolder;
    retain(): ByteBufHolder;
    retain(arg0: number): ByteBufHolder;
    retainedDuplicate(): ByteBufHolder;
    touch(): ByteBufHolder;
    touch(arg0: Object): ByteBufHolder;
}