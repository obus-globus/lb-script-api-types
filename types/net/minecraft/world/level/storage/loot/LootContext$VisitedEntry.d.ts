import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LootDataType } from '../../../../../../net/minecraft/world/level/storage/loot/LootDataType.d.ts'
import type { Validatable } from '../../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
export class LootContext$VisitedEntry<T extends Validatable> extends Record {
    constructor(type: LootDataType<T>, value: T)
    // private type: LootDataType<T>;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): LootDataType<T>;
    value(): T;
}