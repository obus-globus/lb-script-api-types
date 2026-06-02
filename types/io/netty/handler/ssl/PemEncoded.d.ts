import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PemEncoded extends ByteBufHolder, Object{
    copy(): PemEncoded;
    duplicate(): PemEncoded;
    isSensitive(): boolean;
    replace(arg0: ByteBuf): PemEncoded;
    retain(): PemEncoded;
    retain(arg0: number): PemEncoded;
    retainedDuplicate(): PemEncoded;
    touch(): PemEncoded;
    touch(arg0: Object): PemEncoded;
}