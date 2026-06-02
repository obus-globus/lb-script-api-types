import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Salmon$Variant } from '../../../../../../net/minecraft/world/entity/animal/fish/Salmon$Variant.d.ts'
export class SalmonRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    variant: Salmon$Variant;
}