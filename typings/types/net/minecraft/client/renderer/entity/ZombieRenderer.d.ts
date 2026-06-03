import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { ZombieModel } from '../../../../../net/minecraft/client/model/monster/zombie/ZombieModel.d.ts'
import type { AbstractZombieRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractZombieRenderer.d.ts'
import type { ArmorModelSet } from '../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HumanoidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ZombieRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ZombieRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Zombie } from '../../../../../net/minecraft/world/entity/monster/zombie/Zombie.d.ts'
export class ZombieRenderer extends AbstractZombieRenderer<Zombie, ZombieRenderState, ZombieModel<ZombieRenderState>> {
    static NAMETAG_SCALE: number;
    static extractHumanoidRenderState(paramentity: LivingEntity, paramstate: HumanoidRenderState, parampartialTicks: number, paramitemModelResolver: ItemModelResolver): void;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    constructor(context: EntityRendererProvider$Context, body: ModelLayerLocation, babyBody: ModelLayerLocation, armorSet: ArmorModelSet<ModelLayerLocation>, babyArmorSet: ArmorModelSet<ModelLayerLocation>)
    createRenderState(): ZombieRenderState;
    createRenderState(entity: Zombie, partialTicks: number): ZombieRenderState;
}