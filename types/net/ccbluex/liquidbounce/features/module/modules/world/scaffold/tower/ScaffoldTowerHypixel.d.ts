import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ScaffoldTower } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/tower/ScaffoldTower.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class ScaffoldTowerHypixel extends ScaffoldTower {
    static Companion: Tagged$Companion;
    static INSTANCE: ScaffoldTowerHypixel;
    // private tickHandler: EventHook<GameTickEvent>;
    getTargetedPosition(blockPos: BlockPos): BlockPos;
}