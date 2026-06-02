import type { ParrotModel$Pose } from '../../../../../../net/minecraft/client/model/animal/parrot/ParrotModel$Pose.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Parrot$Variant } from '../../../../../../net/minecraft/world/entity/animal/parrot/Parrot$Variant.d.ts'
export class ParrotRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    flapAngle: number;
    pose: ParrotModel$Pose;
    variant: Parrot$Variant;
}