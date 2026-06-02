import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class MurderMysterySwordDetection extends Object {
    static INSTANCE: MurderMysterySwordDetection;
    // private KNOWN_NON_SWORD_ITEMS: Item[];
    // private KNOWN_SWORD_BLOCKS: Block[];
    // private KNOWN_SWORD_ITEMS: Item[];
    isSword(itemStack: ItemStack): boolean;
}