import type { PlayerMessageSignature } from '../../../../../../../com/viaversion/viaversion/api/minecraft/PlayerMessageSignature.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class PlayerMessageSignatureType extends Type<PlayerMessageSignature> {
    constructor()
    read(arg0: ByteBuf): PlayerMessageSignature;
    write(arg0: ByteBuf, arg1: PlayerMessageSignature): void;
}