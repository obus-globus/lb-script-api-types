import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { PigVariant } from '../../../../../../net/minecraft/world/entity/animal/pig/PigVariant.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PigRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    saddle: ItemStack;
    variant: PigVariant;
}