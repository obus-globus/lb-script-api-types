import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { ShortReferencePair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortReferencePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2ReferenceOpenCustomHashMap$MapEntry extends Object implements Short2ReferenceMap$Entry<V>, ShortReferencePair<V>, Map$Entry<number, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static of<V extends unknown>(paramarg0: number, paramarg1: V): ShortReferencePair<V>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): ShortReferencePair<V>;
    firstShort(): number;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): ShortReferencePair<V>;
    keyShort(): number;
    left(): number;
    left<V extends unknown>(arg0: number): ShortReferencePair<V>;
    leftShort(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): ShortReferencePair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}