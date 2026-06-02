import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerboundPlayerActionPacket$Action } from '../../../../../../net/minecraft/network/protocol/game/ServerboundPlayerActionPacket$Action.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vec2 } from '../../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Pair } from '../../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class ClientPlayerInteractionManager1_18_2 extends Object {
    constructor()
    // private unAckedActions: Map<Pair<BlockPos, ServerboundPlayerActionPacket$Action>, Pair<Vec3, Vec2>>;
    handleBlockBreakAck(arg0: BlockPos, arg1: BlockState, arg2: ServerboundPlayerActionPacket$Action, arg3: boolean): void;
    trackPlayerAction(arg0: ServerboundPlayerActionPacket$Action, arg1: BlockPos): void;
}