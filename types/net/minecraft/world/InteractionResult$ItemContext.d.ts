import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
export class InteractionResult$ItemContext extends Record {
    // private heldItemTransformedTo: ItemStack;
    // private wasItemInteraction: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    heldItemTransformedTo(): ItemStack;
    toString(): string;
    wasItemInteraction(): boolean;
}