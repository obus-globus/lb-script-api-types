import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
export class SheepRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    headEatAngleScale: number;
    headEatPositionScale: number;
    isJebSheep: boolean;
    isSheared: boolean;
    woolColor: DyeColor;
    getWoolColor(): number;
}