import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class HappyGhastRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    bodyItem: ItemStack;
    isLeashHolder: boolean;
    isRidden: boolean;
}