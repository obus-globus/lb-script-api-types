import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { GameRule } from '../../../../../../net/raphimc/viabedrock/protocol/model/GameRule.d.ts'
export class GameRuleType extends Type<GameRule> {
    constructor(arg0: boolean)
    // private varInt: boolean;
    read(arg0: ByteBuf): GameRule;
    write(arg0: Ops, arg1: GameRule): void;
    write(arg0: ByteBuf, arg1: GameRule): void;
}