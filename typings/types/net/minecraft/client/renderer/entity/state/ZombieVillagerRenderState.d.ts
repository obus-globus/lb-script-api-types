import type { ArmedEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { VillagerDataHolderRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/VillagerDataHolderRenderState.d.ts'
import type { ZombieRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ZombieRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { VillagerData } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerData.d.ts'
export class ZombieVillagerRenderState extends ZombieRenderState implements VillagerDataHolderRenderState {
    static NO_OUTLINE: number;
    static extractArmedEntityRenderState(paramentity: LivingEntity, paramstate: ArmedEntityRenderState, paramitemModelResolver: ItemModelResolver, parampartialTicks: number): void;
    constructor()
    villagerData: VillagerData;
    getVillagerData(): VillagerData;
}