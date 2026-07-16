import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { CharObjectPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2ObjectArrayMap$MapEntry extends Object implements Char2ObjectMap$Entry<V>, CharObjectPair<V>, Map$Entry<string, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator<V extends unknown>(): (param0: CharObjectPair<V>, param1: CharObjectPair<V>) => number;
    static of<V extends unknown>(paramarg0: string, paramarg1: V): CharObjectPair<V>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): string;
    first<V extends unknown>(arg0: string): CharObjectPair<V>;
    firstChar(): string;
    getCharKey(): string;
    hashCode(): number;
    key(): string;
    key<V extends unknown>(arg0: string): CharObjectPair<V>;
    keyChar(): string;
    left(): string;
    left<V extends unknown>(arg0: string): CharObjectPair<V>;
    leftChar(): string;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): CharObjectPair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}