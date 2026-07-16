import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { LongIntPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongIntPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2IntOpenCustomHashMap$MapEntry extends Object implements Long2IntMap$Entry, LongIntPair, Map$Entry<number, number> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator(): (param0: LongIntPair, param1: LongIntPair) => number;
    static of(paramarg0: number, paramarg1: number): LongIntPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongIntPair;
    firstLong(): number;
    getIntValue(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongIntPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongIntPair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): LongIntPair;
    secondInt(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongIntPair;
    valueInt(): number;
}