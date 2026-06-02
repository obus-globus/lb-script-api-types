import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChestType } from '../../../../net/minecraft/world/level/block/state/properties/ChestType.d.ts'
export class MultiblockChestResources<T extends Object | number | string | boolean> extends Record {
    constructor(single: T, left: T, right: T)
    // private left: T;
    // private right: T;
    // private single: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    left(): T;
    map(mapper: (param0: T) => S): MultiblockChestResources<S>;
    right(): T;
    select(chestType: ChestType): T;
    single(): T;
    toString(): string;
}