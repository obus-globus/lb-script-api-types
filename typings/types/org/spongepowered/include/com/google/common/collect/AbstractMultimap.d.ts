import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Multimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/Multimap.d.ts'
export abstract class AbstractMultimap<K extends unknown, V extends unknown> extends Object implements Multimap<K, V> {
    constructor()
    // private asMap: Map<K, V[]>;
    // private keySet: K[];
    asMap(): Map<K, V[]>;
    createAsMap(): Map<K, V[]>;
    createKeySet(): K[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    keySet(): K[];
    put(arg0: K, arg1: V): boolean;
    toString(): string;
}