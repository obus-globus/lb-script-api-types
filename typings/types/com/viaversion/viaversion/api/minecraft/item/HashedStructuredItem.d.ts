import type { HashedItem } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/HashedItem.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HashedStructuredItem extends Object implements HashedItem {
    static empty(): HashedStructuredItem;
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: Int2IntMap, arg3: (Object | null)[])
    // private dataHashes: Int2IntMap;
    // private removedData: (Object | null)[];
    amount(): number;
    copy(): HashedItem;
    dataHashesById(): Int2IntMap;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): number;
    removedDataIds(): (Object | null)[];
    setAmount(arg0: number): void;
    setIdentifier(arg0: number): void;
    toString(): string;
}