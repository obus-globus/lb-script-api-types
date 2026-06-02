import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { TropicalFish$Pattern } from '../../../../../../net/minecraft/world/entity/animal/fish/TropicalFish$Pattern.d.ts'
export class TropicalFishRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    baseColor: number;
    pattern: TropicalFish$Pattern;
    patternColor: number;
}