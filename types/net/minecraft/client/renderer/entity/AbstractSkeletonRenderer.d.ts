import type { HumanoidModel$ArmPose } from '../../../../../net/minecraft/client/model/HumanoidModel$ArmPose.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { SkeletonModel } from '../../../../../net/minecraft/client/model/monster/skeleton/SkeletonModel.d.ts'
import type { ArmorModelSet } from '../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HumanoidMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/HumanoidMobRenderer.d.ts'
import type { HumanoidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SkeletonRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SkeletonRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { HumanoidArm } from '../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AbstractSkeleton } from '../../../../../net/minecraft/world/entity/monster/skeleton/AbstractSkeleton.d.ts'
export abstract class AbstractSkeletonRenderer<T extends AbstractSkeleton, S extends SkeletonRenderState> extends HumanoidMobRenderer<T, S, SkeletonModel<S>> {
    static NAMETAG_SCALE: number;
    static extractHumanoidRenderState(paramentity: LivingEntity, paramstate: HumanoidRenderState, parampartialTicks: number, paramitemModelResolver: ItemModelResolver): void;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, body: ModelLayerLocation, armorSet: ArmorModelSet<ModelLayerLocation>)
    constructor(context: EntityRendererProvider$Context, armorSet: ArmorModelSet<ModelLayerLocation>, bodyModel: SkeletonModel<S>)
    extractRenderState(entity: T, state: S, partialTicks: number): void;
    getArmPose(mob: T, arm: HumanoidArm): HumanoidModel$ArmPose;
    isShaking(state: S): boolean;
}