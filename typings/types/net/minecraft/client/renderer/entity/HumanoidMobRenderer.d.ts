import type { HumanoidModel } from '../../../../../net/minecraft/client/model/HumanoidModel.d.ts'
import type { HumanoidModel$ArmPose } from '../../../../../net/minecraft/client/model/HumanoidModel$ArmPose.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { CustomHeadLayer$Transforms } from '../../../../../net/minecraft/client/renderer/entity/layers/CustomHeadLayer$Transforms.d.ts'
import type { HumanoidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { HumanoidArm } from '../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
export abstract class HumanoidMobRenderer<T extends Mob, S extends HumanoidRenderState, M extends HumanoidModel<S>> extends AgeableMobRenderer<T, S, M> {
    static NAMETAG_SCALE: number;
    static extractHumanoidRenderState(paramentity: LivingEntity, paramstate: HumanoidRenderState, parampartialTicks: number, paramitemModelResolver: ItemModelResolver): void;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, model: M, babyModel: M, shadow: number)
    constructor(context: EntityRendererProvider$Context, model: M, babyModel: M, shadow: number, customHeadTransforms: CustomHeadLayer$Transforms)
    constructor(context: EntityRendererProvider$Context, model: M, shadow: number)
    extractRenderState(entity: T, state: S, partialTicks: number): void;
    getArmPose(mob: T, arm: HumanoidArm): HumanoidModel$ArmPose;
}