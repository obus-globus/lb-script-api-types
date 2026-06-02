import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VillagerData } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerData.d.ts'
export interface VillagerDataHolder extends Object{
    getVillagerData(): VillagerData;
    setVillagerData(data: VillagerData): void;
}