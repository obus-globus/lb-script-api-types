import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class StructuredItem extends Object implements Item {
    static empty(): StructuredItem;
    static emptyArray(paramarg0: number): (Object | null)[];
    static isEmpty(paramarg0: Item): boolean;
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: StructuredDataContainer)
    readonly amount: number;
    readonly data: StructuredDataContainer;
    readonly identifier: number;
    amount(): number;
    copy(): StructuredItem;
    data(): number;
    dataContainer(): StructuredDataContainer;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): number;
    isTemplate(): boolean;
    setAmount(arg0: number): void;
    setData(arg0: number): void;
    setIdentifier(arg0: number): void;
    setTag(arg0: Map$Entry<string, Tag>[]): void;
    tag(): Map$Entry<string, Tag>[];
    toString(): string;
}