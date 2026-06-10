import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { PlayerBlockBreakEvents$After } from '../../../../../../net/fabricmc/fabric/api/event/player/PlayerBlockBreakEvents$After.d.ts'
import type { PlayerBlockBreakEvents$Before } from '../../../../../../net/fabricmc/fabric/api/event/player/PlayerBlockBreakEvents$Before.d.ts'
import type { PlayerBlockBreakEvents$Canceled } from '../../../../../../net/fabricmc/fabric/api/event/player/PlayerBlockBreakEvents$Canceled.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class PlayerBlockBreakEvents extends Object {
    static AFTER: Event<(param0: Level, param1: Player, param2: BlockPos, param3: BlockState, param4: BlockEntity) => void>;
    static BEFORE: Event<(param0: Level, param1: Player, param2: BlockPos, param3: BlockState, param4: BlockEntity) => boolean>;
    static CANCELED: Event<(param0: Level, param1: Player, param2: BlockPos, param3: BlockState, param4: BlockEntity) => void>;
    private constructor()
}