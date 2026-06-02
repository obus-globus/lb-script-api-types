import type { Object } from '../../../java/lang/Object.d.ts'
import type { Equivalence } from '../../../org/graalvm/collections/Equivalence.d.ts'
import type { UnmodifiableMapCursor } from '../../../org/graalvm/collections/UnmodifiableMapCursor.d.ts'
export interface UnmodifiableEconomicMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    containsKey(key: K): boolean;
    get(key: K): V;
    get(key: K, defaultValue: V): V;
    getEntries(): UnmodifiableMapCursor<K, V>;
    getEquivalenceStrategy(): Equivalence;
    getKeys(): K[];
    getValues(): V[];
    isEmpty(): boolean;
    size(): number;
}