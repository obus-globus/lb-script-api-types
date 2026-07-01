import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Fires when an item's lore (tooltip lines) is queried, exposing the item stack and the mutable lore list.
 */
export class ItemLoreQueryEvent extends Event {
    constructor(itemStack: ItemStack, lore: Component[])
    readonly itemStack: ItemStack;
    readonly lore: Component[];
}