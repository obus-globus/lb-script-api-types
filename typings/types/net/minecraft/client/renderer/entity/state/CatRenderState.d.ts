import type { FelineRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/FelineRenderState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
export class CatRenderState extends FelineRenderState {
    static NO_OUTLINE: number;
    constructor()
    collarColor: DyeColor;
    isLyingOnTopOfSleepingPlayer: boolean;
    texture: Identifier;
}