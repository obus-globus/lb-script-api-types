import type { Long2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanMap$Entry.d.ts'
import type { LongBooleanPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongBooleanPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2BooleanOpenHashMap$MapEntry extends Object implements Long2BooleanMap$Entry, LongBooleanPair, Map$Entry<number, boolean> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator(): (param0: LongBooleanPair, param1: LongBooleanPair) => number;
    static of(paramarg0: number, paramarg1: boolean): LongBooleanPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongBooleanPair;
    firstLong(): number;
    getBooleanValue(): boolean;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongBooleanPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongBooleanPair;
    leftLong(): number;
    right(): boolean;
    right(arg0: boolean): LongBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): LongBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): LongBooleanPair;
    valueBoolean(): boolean;
}