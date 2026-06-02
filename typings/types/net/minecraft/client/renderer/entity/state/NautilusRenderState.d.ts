import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ZombieNautilusVariant } from '../../../../../../net/minecraft/world/entity/animal/nautilus/ZombieNautilusVariant.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class NautilusRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    bodyArmorItem: ItemStack;
    saddle: ItemStack;
    variant: ZombieNautilusVariant;
}