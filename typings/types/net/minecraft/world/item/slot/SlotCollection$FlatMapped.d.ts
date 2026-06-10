import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SlotAccess } from '../../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { SlotCollection } from '../../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
export class SlotCollection$FlatMapped extends Record implements SlotCollection {
    static EMPTY: SlotCollection;
    static concat(paramterms: SlotCollection[]): SlotCollection;
    static concat(paramfirst: SlotCollection, paramsecond: SlotCollection): SlotCollection;
    static of(paramslots: SlotAccess[]): SlotCollection;
    static of(paramslotAccess: SlotAccess): SlotCollection;
    constructor(slots: SlotCollection, mapper: (param0: ItemStack) => SlotCollection)
    // private mapper: (param0: ItemStack) => SlotCollection;
    // private slots: SlotCollection;
    equals(o: Object | null): boolean;
    filter(predicate: (param0: ItemStack) => boolean): SlotCollection;
    flatMap(mapper: (param0: ItemStack) => SlotCollection): SlotCollection;
    hashCode(): number;
    itemCopies(): Stream<ItemStack>;
    limit(limit: number): SlotCollection;
    mapper(): (param0: ItemStack) => SlotCollection;
    slots(): SlotCollection;
    toString(): string;
}