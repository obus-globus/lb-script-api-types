import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { CowVariant } from '../../../../../../net/minecraft/world/entity/animal/cow/CowVariant.d.ts'
export class CowRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    variant: CowVariant;
}