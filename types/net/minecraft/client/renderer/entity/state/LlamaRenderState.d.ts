import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Llama$Variant } from '../../../../../../net/minecraft/world/entity/animal/equine/Llama$Variant.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class LlamaRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    bodyItem: ItemStack;
    hasChest: boolean;
    isTraderLlama: boolean;
    variant: Llama$Variant;
}