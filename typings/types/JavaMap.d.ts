import type { Object } from './java/lang/Object.d.ts'

/**
 * A13: the GraalJS host surface of a `java.util.Map` instance. Method calls
 * only: NO bracket indexing (`m["k"]` reads a member, not an entry), NO
 * JS-`Map` API (`.set`, `.size` as a property), NO `for...of` / spread.
 */
export interface JavaMap<K, V> extends Object {
    /** Value for `key`, or `null` if absent. */
    get(key: K): V | null;
    /** Stores `value`; returns the previous value or `null`. */
    put(key: K, value: V): V | null;
    /** Stores only if absent; returns the existing value or `null`. */
    putIfAbsent(key: K, value: V): V | null;
    getOrDefault(key: K, defaultValue: V): V;
    /** Removes `key`; returns the removed value or `null`. */
    remove(key: K): V | null;
    containsKey(key: K): boolean;
    clear(): void;
    size(): number;
    isEmpty(): boolean;
    /** Computes a value for `key` (creating it if absent). */
    compute(key: K, remap: (key: K, value: V | null) => V | null): V | null;
    /** Computes and stores a value only if `key` is absent. */
    computeIfAbsent(key: K, mapping: (key: K) => V): V;
    /** Merges `value` into the existing value for `key`. */
    merge(key: K, value: V, remap: (oldValue: V, value: V) => V | null): V | null;
    /** Replaces the value for `key` only if it is currently present. */
    replace(key: K, value: V): V | null;
    /** Runs `action` for every entry. NOTE: Java argument order `(key, value)` - the OPPOSITE of JS `Map#forEach`. */
    forEach(action: (key: K, value: V) => void): void;
    /** The key set (a live Java Set view - not array-mapped by GraalJS). */
    keySet(): any;
    /** The entry set (a live Java Set view - not array-mapped by GraalJS). */
    entrySet(): any;
    /** The values collection (a live Java Collection view - not array-mapped by GraalJS). */
    values(): any;
}
