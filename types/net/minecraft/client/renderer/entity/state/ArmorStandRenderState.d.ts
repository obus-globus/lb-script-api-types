import type { ArmedEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { HumanoidRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { Rotations } from '../../../../../../net/minecraft/core/Rotations.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class ArmorStandRenderState extends HumanoidRenderState {
    static NO_OUTLINE: number;
    static extractArmedEntityRenderState(paramentity: LivingEntity, paramstate: ArmedEntityRenderState, paramitemModelResolver: ItemModelResolver, parampartialTicks: number): void;
    constructor()
    bodyPose: Rotations;
    headPose: Rotations;
    isMarker: boolean;
    isSmall: boolean;
    leftArmPose: Rotations;
    leftLegPose: Rotations;
    rightArmPose: Rotations;
    rightLegPose: Rotations;
    showArms: boolean;
    showBasePlate: boolean;
    wiggle: number;
    yRot: number;
}