import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { IntBooleanPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntBooleanPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2BooleanOpenHashMap$MapEntry extends Object implements Int2BooleanMap$Entry, IntBooleanPair, Map$Entry<number, boolean> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator(): (param0: IntBooleanPair, param1: IntBooleanPair) => number;
    static of(paramarg0: number, paramarg1: boolean): IntBooleanPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntBooleanPair;
    firstInt(): number;
    getBooleanValue(): boolean;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntBooleanPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntBooleanPair;
    leftInt(): number;
    right(): boolean;
    right(arg0: boolean): IntBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): IntBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): IntBooleanPair;
    valueBoolean(): boolean;
}