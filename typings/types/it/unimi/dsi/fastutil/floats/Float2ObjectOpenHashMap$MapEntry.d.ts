import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { FloatObjectPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatObjectPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2ObjectOpenHashMap$MapEntry extends Object implements Float2ObjectMap$Entry<V>, FloatObjectPair<V>, Map$Entry<number, V> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): FloatObjectPair<V>;
    firstFloat(): number;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): FloatObjectPair<V>;
    keyFloat(): number;
    left(): number;
    left<V extends unknown>(arg0: number): FloatObjectPair<V>;
    leftFloat(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): FloatObjectPair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}