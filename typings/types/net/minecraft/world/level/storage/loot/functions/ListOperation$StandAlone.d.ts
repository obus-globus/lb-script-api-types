import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation.d.ts'
export class ListOperation$StandAlone<T extends Object | number | string | boolean> extends Record {
    static codec(paramvalueCodec: Codec<Object>, parammaxSize: number): Codec<ListOperation$StandAlone<Object>>;
    constructor(value: T[], operation: ListOperation)
    // private operation: ListOperation;
    // private value: T[];
    apply(input: T[]): T[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    operation(): ListOperation;
    toString(): string;
    value(): T[];
}