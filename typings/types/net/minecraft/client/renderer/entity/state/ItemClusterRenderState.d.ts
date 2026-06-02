import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemClusterRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    static getRenderedAmount(paramstackCount: number): number;
    static getSeedForItemStack(paramitemStack: ItemStack): number;
    constructor()
    count: number;
    item: ItemStackRenderState;
    seed: number;
    extractItemGroupRenderState(entity: Entity, stack: ItemStack, itemModelResolver: ItemModelResolver): void;
}