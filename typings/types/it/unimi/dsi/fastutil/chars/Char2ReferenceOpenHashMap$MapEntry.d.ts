import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { CharReferencePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharReferencePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2ReferenceOpenHashMap$MapEntry extends Object implements Char2ReferenceMap$Entry<V>, CharReferencePair<V>, Map$Entry<string, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static of<V extends unknown>(paramarg0: string, paramarg1: V): CharReferencePair<V>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): string;
    first<V extends unknown>(arg0: string): CharReferencePair<V>;
    firstChar(): string;
    getCharKey(): string;
    hashCode(): number;
    key(): string;
    key<V extends unknown>(arg0: string): CharReferencePair<V>;
    keyChar(): string;
    left(): string;
    left<V extends unknown>(arg0: string): CharReferencePair<V>;
    leftChar(): string;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): CharReferencePair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}