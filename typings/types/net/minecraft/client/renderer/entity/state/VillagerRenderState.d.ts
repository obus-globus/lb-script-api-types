import type { HoldingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HoldingEntityRenderState.d.ts'
import type { VillagerDataHolderRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/VillagerDataHolderRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { VillagerData } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerData.d.ts'
export class VillagerRenderState extends HoldingEntityRenderState implements VillagerDataHolderRenderState {
    static NO_OUTLINE: number;
    static extractHoldingEntityRenderState(paramentity: LivingEntity, paramstate: HoldingEntityRenderState, paramitemModelResolver: ItemModelResolver): void;
    constructor()
    isUnhappy: boolean;
    villagerData: VillagerData;
    getVillagerData(): VillagerData;
}