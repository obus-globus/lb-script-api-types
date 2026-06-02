import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Multimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/Multimap.d.ts'
export abstract class AbstractMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Multimap<K, V> {
    constructor()
    // private asMap: Map<K, E[]>;
    // private keySet: K[];
    asMap(): Map<K, E[]>;
    createAsMap(): Map<K, E[]>;
    createKeySet(): K[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    keySet(): K[];
    put(arg0: K, arg1: V): boolean;
    toString(): string;
}