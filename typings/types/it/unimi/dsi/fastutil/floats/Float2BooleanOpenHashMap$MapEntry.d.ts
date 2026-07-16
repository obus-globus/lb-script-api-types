import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { FloatBooleanPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBooleanPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2BooleanOpenHashMap$MapEntry extends Object implements Float2BooleanMap$Entry, FloatBooleanPair, Map$Entry<number, boolean> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator(): (param0: FloatBooleanPair, param1: FloatBooleanPair) => number;
    static of(paramarg0: number, paramarg1: boolean): FloatBooleanPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatBooleanPair;
    firstFloat(): number;
    getBooleanValue(): boolean;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatBooleanPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatBooleanPair;
    leftFloat(): number;
    right(): boolean;
    right(arg0: boolean): FloatBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): FloatBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): FloatBooleanPair;
    valueBoolean(): boolean;
}