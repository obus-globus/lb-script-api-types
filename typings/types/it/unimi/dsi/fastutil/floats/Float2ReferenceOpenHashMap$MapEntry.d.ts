import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { FloatReferencePair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatReferencePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2ReferenceOpenHashMap$MapEntry extends Object implements Float2ReferenceMap$Entry<V>, FloatReferencePair<V>, Map$Entry<number, V> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): FloatReferencePair<V>;
    firstFloat(): number;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): FloatReferencePair<V>;
    keyFloat(): number;
    left(): number;
    left<V extends unknown>(arg0: number): FloatReferencePair<V>;
    leftFloat(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): FloatReferencePair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}