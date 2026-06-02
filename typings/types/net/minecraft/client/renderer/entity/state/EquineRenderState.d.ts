import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class EquineRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    animateTail: boolean;
    bodyArmorItem: ItemStack;
    eatAnimation: number;
    feedingAnimation: number;
    isRidden: boolean;
    saddle: ItemStack;
    standAnimation: number;
}