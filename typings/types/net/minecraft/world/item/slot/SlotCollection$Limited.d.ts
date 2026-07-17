import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { SlotCollection } from '../../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
export class SlotCollection$Limited extends Record implements SlotCollection {
    static EMPTY: SlotCollection;
    constructor(slots: SlotCollection, limit: number)
    // private limit: number;
    // private slots: SlotCollection;
    equals(o: Object | null): boolean;
    filter(predicate: (param0: ItemStack) => boolean): SlotCollection;
    flatMap(mapper: (param0: ItemStack) => SlotCollection): SlotCollection;
    hashCode(): number;
    itemCopies(): Stream<ItemStack>;
    limit(): number;
    limit(limit: number): SlotCollection;
    slots(): SlotCollection;
    toString(): string;
}