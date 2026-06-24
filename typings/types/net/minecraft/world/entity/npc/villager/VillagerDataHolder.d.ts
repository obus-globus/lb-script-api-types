import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { VillagerData } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerData.d.ts'
import type { ServerLevelAccessor } from '../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
export interface VillagerDataHolder extends Object{
    finalizeVillagerType(level: ServerLevelAccessor, pos: BlockPos): void;
    getVillagerData(): VillagerData;
    getVillagerDataFinalized(): boolean;
    setVillagerData(data: VillagerData): void;
    setVillagerDataFinalized(villagerDataFinalized: boolean): void;
}