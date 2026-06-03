import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { PiglinModel } from '../../../../../net/minecraft/client/model/monster/piglin/PiglinModel.d.ts'
import type { ArmorModelSet } from '../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HumanoidMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/HumanoidMobRenderer.d.ts'
import type { CustomHeadLayer$Transforms } from '../../../../../net/minecraft/client/renderer/entity/layers/CustomHeadLayer$Transforms.d.ts'
import type { HumanoidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { PiglinRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/PiglinRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AbstractPiglin } from '../../../../../net/minecraft/world/entity/monster/piglin/AbstractPiglin.d.ts'
export class PiglinRenderer extends HumanoidMobRenderer<AbstractPiglin, PiglinRenderState, PiglinModel> {
    static NAMETAG_SCALE: number;
    static PIGLIN_CUSTOM_HEAD_TRANSFORMS: CustomHeadLayer$Transforms;
    static extractHumanoidRenderState(paramentity: LivingEntity, paramstate: HumanoidRenderState, parampartialTicks: number, paramitemModelResolver: ItemModelResolver): void;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, body: ModelLayerLocation, babyBody: ModelLayerLocation, armorSet: ArmorModelSet<ModelLayerLocation>, babyArmorSet: ArmorModelSet<ModelLayerLocation>)
    createRenderState(): PiglinRenderState;
    createRenderState(entity: AbstractPiglin, partialTicks: number): PiglinRenderState;
    extractRenderState(entity: AbstractPiglin, state: PiglinRenderState, partialTicks: number): void;
    getTextureLocation(state: PiglinRenderState): Identifier;
    isShaking(state: PiglinRenderState): boolean;
}