import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class StriderRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    isRidden: boolean;
    isSuffocating: boolean;
    saddle: ItemStack;
}