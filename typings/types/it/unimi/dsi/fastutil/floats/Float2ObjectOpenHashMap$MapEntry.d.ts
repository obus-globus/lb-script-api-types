import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { FloatObjectPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2ObjectOpenHashMap$MapEntry extends Object implements Float2ObjectMap$Entry<V>, FloatObjectPair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: Object | null): FloatObjectPair<Object>;
    constructor(null_: Float2ObjectOpenHashMap$MapEntry)
    constructor(null_: Float2ObjectOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends Object | number | string | boolean>(arg0: number): FloatObjectPair<V>;
    firstFloat(): number;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends Object | number | string | boolean>(arg0: number): FloatObjectPair<V>;
    keyFloat(): number;
    left(): number;
    left<V extends Object | number | string | boolean>(arg0: number): FloatObjectPair<V>;
    leftFloat(): number;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): FloatObjectPair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}