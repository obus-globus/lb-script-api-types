import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
export class Container$ContainerIterator extends Object implements Iterator<ItemStack> {
    constructor(container: ItemStack[])
    // private container: ItemStack[];
    // private index: number;
    // private size: number;
    forEachRemaining(arg0: (param0: ItemStack) => void): void;
    hasNext(): boolean;
    next(): ItemStack;
}