import type { EquineRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EquineRenderState.d.ts'
import type { Markings } from '../../../../../../net/minecraft/world/entity/animal/equine/Markings.d.ts'
import type { Variant } from '../../../../../../net/minecraft/world/entity/animal/equine/Variant.d.ts'
export class HorseRenderState extends EquineRenderState {
    static NO_OUTLINE: number;
    constructor()
    markings: Markings;
    variant: Variant;
}