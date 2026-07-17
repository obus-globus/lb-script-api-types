import type { WorkAtComposterAccessor } from '../../../../../../net/fabricmc/fabric/mixin/content/registry/WorkAtComposterAccessor.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { GlobalPos } from '../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { WorkAtPoi } from '../../../../../../net/minecraft/world/entity/ai/behavior/WorkAtPoi.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class WorkAtComposter extends WorkAtPoi implements WorkAtComposterAccessor {
    static DEFAULT_DURATION: number;
    constructor()
    // private compostItems(level: ServerLevel, body: Villager, jobSitePos: GlobalPos, blockState: BlockState): void;
    // private makeBread(level: ServerLevel, body: Villager): void;
    // private spawnComposterFillEffects(level: ServerLevel, blockState: BlockState, pos: BlockPos, newState: BlockState): void;
    useWorkstation(level: ServerLevel, body: Villager): void;
}