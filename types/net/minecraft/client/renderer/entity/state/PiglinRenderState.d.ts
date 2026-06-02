import type { ArmedEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { HumanoidRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PiglinArmPose } from '../../../../../../net/minecraft/world/entity/monster/piglin/PiglinArmPose.d.ts'
export class PiglinRenderState extends HumanoidRenderState {
    static NO_OUTLINE: number;
    static extractArmedEntityRenderState(paramentity: LivingEntity, paramstate: ArmedEntityRenderState, paramitemModelResolver: ItemModelResolver, parampartialTicks: number): void;
    constructor()
    armPose: PiglinArmPose;
    isBrute: boolean;
    isConverting: boolean;
    maxCrossbowChageDuration: number;
}