import type { GameProfile$Property } from '../../../../../../../com/viaversion/viaversion/api/minecraft/GameProfile$Property.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ProfilePropertyType extends Type<GameProfile$Property> {
    constructor()
    read(arg0: ByteBuf): GameProfile$Property;
    write(arg0: Ops, arg1: GameProfile$Property): void;
    write(arg0: ByteBuf, arg1: GameProfile$Property): void;
}