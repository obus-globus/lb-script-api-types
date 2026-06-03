import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { ZombifiedPiglinModel } from '../../../../../net/minecraft/client/model/monster/piglin/ZombifiedPiglinModel.d.ts'
import type { ArmorModelSet } from '../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HumanoidMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/HumanoidMobRenderer.d.ts'
import type { HumanoidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ZombifiedPiglinRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ZombifiedPiglinRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ZombifiedPiglin } from '../../../../../net/minecraft/world/entity/monster/zombie/ZombifiedPiglin.d.ts'
export class ZombifiedPiglinRenderer extends HumanoidMobRenderer<ZombifiedPiglin, ZombifiedPiglinRenderState, ZombifiedPiglinModel> {
    static NAMETAG_SCALE: number;
    static extractHumanoidRenderState(paramentity: LivingEntity, paramstate: HumanoidRenderState, parampartialTicks: number, paramitemModelResolver: ItemModelResolver): void;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, body: ModelLayerLocation, babyBody: ModelLayerLocation, armorSet: ArmorModelSet<ModelLayerLocation>, babyArmorSet: ArmorModelSet<ModelLayerLocation>)
    createRenderState(): ZombifiedPiglinRenderState;
    createRenderState(entity: ZombifiedPiglin, partialTicks: number): ZombifiedPiglinRenderState;
    extractRenderState(entity: ZombifiedPiglin, state: ZombifiedPiglinRenderState, partialTicks: number): void;
    getTextureLocation(state: ZombifiedPiglinRenderState): Identifier;
}