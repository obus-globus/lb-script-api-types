import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ChickenVariant } from '../../../../../../net/minecraft/world/entity/animal/chicken/ChickenVariant.d.ts'
export class ChickenRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    flap: number;
    flapSpeed: number;
    variant: ChickenVariant;
}