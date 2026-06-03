import type { ZombieVillagerModel } from '../../../../../net/minecraft/client/model/monster/zombie/ZombieVillagerModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HumanoidMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/HumanoidMobRenderer.d.ts'
import type { HumanoidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ZombieVillagerRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ZombieVillagerRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ZombieVillager } from '../../../../../net/minecraft/world/entity/monster/zombie/ZombieVillager.d.ts'
export class ZombieVillagerRenderer extends HumanoidMobRenderer<ZombieVillager, ZombieVillagerRenderState, ZombieVillagerModel<ZombieVillagerRenderState>> {
    static NAMETAG_SCALE: number;
    static extractHumanoidRenderState(paramentity: LivingEntity, paramstate: HumanoidRenderState, parampartialTicks: number, paramitemModelResolver: ItemModelResolver): void;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): ZombieVillagerRenderState;
    createRenderState(entity: ZombieVillager, partialTicks: number): ZombieVillagerRenderState;
    extractRenderState(entity: ZombieVillager, state: ZombieVillagerRenderState, partialTicks: number): void;
    getTextureLocation(state: ZombieVillagerRenderState): Identifier;
    isShaking(state: ZombieVillagerRenderState): boolean;
}