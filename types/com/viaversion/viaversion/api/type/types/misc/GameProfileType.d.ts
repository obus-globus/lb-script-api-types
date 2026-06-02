import type { GameProfile } from '../../../../../../../com/viaversion/viaversion/api/minecraft/GameProfile.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class GameProfileType extends Type<GameProfile> {
    constructor()
    read(arg0: ByteBuf): GameProfile;
    write(arg0: Ops, arg1: GameProfile): void;
    write(arg0: ByteBuf, arg1: GameProfile): void;
}