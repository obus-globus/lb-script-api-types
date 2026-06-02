import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { PlayerAbilities } from '../../../../../../net/raphimc/viabedrock/protocol/model/PlayerAbilities.d.ts'
export class PlayerAbilitiesType extends Type<PlayerAbilities> {
    constructor()
    read(arg0: ByteBuf): PlayerAbilities;
    write(arg0: ByteBuf, arg1: PlayerAbilities): void;
}