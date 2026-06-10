import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ImmutableMapEntry } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ImmutableMapEntry.d.ts'
export class ImmutableMap$Builder<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor()
    constructor(arg0: number)
    // private entries: ImmutableMapEntry<K, V>[];
    // private entriesUsed: boolean;
    // private size: number;
    // private valueComparator: (param0: Object) => boolean;
    build(): Map<K, V>;
    // private ensureCapacity(arg0: number): void;
    put(arg0: K, arg1: V): ImmutableMap$Builder<K, V>;
}