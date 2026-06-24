import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemStackWithSlot extends Record {
    static CODEC: Codec<ItemStackWithSlot>;
    constructor(slot: number, stack: ItemStack)
    // private slot: number;
    // private stack: ItemStack;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isValidInContainer(containerSize: number): boolean;
    slot(): number;
    stack(): ItemStack;
    toString(): string;
}