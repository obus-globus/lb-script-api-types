import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { RandomStrollGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/RandomStrollGoal.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GolemRandomStrollInVillageGoal extends RandomStrollGoal {
    static DEFAULT_INTERVAL: number;
    constructor(mob: PathfinderMob, speedModifier: number)
    // private doesVillagerWantGolem(villager: Villager): boolean;
    getPosition(): Vec3;
    // private getPositionTowardsAnywhere(): Vec3;
    // private getPositionTowardsPoi(): Vec3;
    // private getPositionTowardsVillagerWhoWantsGolem(): Vec3;
    // private getRandomPoiWithinSection(sectionPos: SectionPos): BlockPos;
    // private getRandomVillageSection(): SectionPos;
}