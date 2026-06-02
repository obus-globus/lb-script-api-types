import type { ArmedEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { UndeadRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/UndeadRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { HumanoidArm } from '../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AbstractIllager$IllagerArmPose } from '../../../../../../net/minecraft/world/entity/monster/illager/AbstractIllager$IllagerArmPose.d.ts'
export class IllagerRenderState extends UndeadRenderState {
    static NO_OUTLINE: number;
    static extractArmedEntityRenderState(paramentity: LivingEntity, paramstate: ArmedEntityRenderState, paramitemModelResolver: ItemModelResolver, parampartialTicks: number): void;
    constructor()
    armPose: AbstractIllager$IllagerArmPose;
    attackAnim: number;
    isAggressive: boolean;
    isRiding: boolean;
    mainArm: HumanoidArm;
    maxCrossbowChargeDuration: number;
    ticksUsingItem: number;
}