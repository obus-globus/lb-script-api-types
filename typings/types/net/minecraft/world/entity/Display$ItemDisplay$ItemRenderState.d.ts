import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemDisplayContext } from '../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Display$ItemDisplay$ItemRenderState extends Record {
    constructor(itemStack: ItemStack, itemTransform: ItemDisplayContext)
    // private itemStack: ItemStack;
    // private itemTransform: ItemDisplayContext;
    equals(o: Object | null): boolean;
    hashCode(): number;
    itemStack(): ItemStack;
    itemTransform(): ItemDisplayContext;
    toString(): string;
}