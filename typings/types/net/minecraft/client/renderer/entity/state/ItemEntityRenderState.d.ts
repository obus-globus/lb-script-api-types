import type { ItemClusterRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ItemClusterRenderState.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemEntityRenderState extends ItemClusterRenderState {
    static NO_OUTLINE: number;
    static getRenderedAmount(paramstackCount: number): number;
    static getSeedForItemStack(paramitemStack: ItemStack): number;
    constructor()
    bobOffset: number;
}