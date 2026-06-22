import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ReferenceCounted } from '../../../io/netty/util/ReferenceCounted.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ByteBufHolder extends ReferenceCounted, Object{
    content(): ByteBuf;
    copy(): ByteBufHolder;
    duplicate(): ByteBufHolder;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): ByteBufHolder;
    retain(): ByteBufHolder;
    retain(arg0: number): ByteBufHolder;
    retainedDuplicate(): ByteBufHolder;
    touch(): ByteBufHolder;
    touch(arg0: Object): ByteBufHolder;
}