import type { ProfileKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/ProfileKey.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ProfileKeyType extends Type<ProfileKey> {
    constructor()
    read(arg0: ByteBuf): ProfileKey;
    write(arg0: ByteBuf, arg1: ProfileKey): void;
}