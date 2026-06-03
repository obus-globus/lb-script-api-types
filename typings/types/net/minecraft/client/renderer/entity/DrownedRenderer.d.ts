import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { HumanoidModel$ArmPose } from '../../../../../net/minecraft/client/model/HumanoidModel$ArmPose.d.ts'
import type { DrownedModel } from '../../../../../net/minecraft/client/model/monster/zombie/DrownedModel.d.ts'
import type { AbstractZombieRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractZombieRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HumanoidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ZombieRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ZombieRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { HumanoidArm } from '../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Drowned } from '../../../../../net/minecraft/world/entity/monster/zombie/Drowned.d.ts'
export class DrownedRenderer extends AbstractZombieRenderer<Drowned, ZombieRenderState, DrownedModel> {
    static NAMETAG_SCALE: number;
    static extractHumanoidRenderState(paramentity: LivingEntity, paramstate: HumanoidRenderState, parampartialTicks: number, paramitemModelResolver: ItemModelResolver): void;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): ZombieRenderState;
    createRenderState(entity: Drowned, partialTicks: number): ZombieRenderState;
    getArmPose(mob: Drowned, arm: HumanoidArm): HumanoidModel$ArmPose;
    getTextureLocation(state: ZombieRenderState): Identifier;
    setupRotations(state: ZombieRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
}