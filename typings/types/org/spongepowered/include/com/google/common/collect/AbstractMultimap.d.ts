import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Multimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/Multimap.d.ts'
export abstract class AbstractMultimap<K extends unknown, V extends unknown> extends Object implements Multimap<K, V> {
    constructor()
    // private asMap: JavaMap<K, V[]>;
    // private keySet: K[];
    asMap(): JavaMap<K, V[]>;
    createAsMap(): JavaMap<K, V[]>;
    createKeySet(): K[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    keySet(): K[];
    put(arg0: K, arg1: V): boolean;
    toString(): string;
}