import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { FloatReferencePair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatReferencePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2ReferenceOpenHashMap$MapEntry extends Object implements Float2ReferenceMap$Entry<V>, FloatReferencePair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: number, paramarg1: Object | null): FloatReferencePair<Object>;
    constructor(null_: Float2ReferenceOpenHashMap$MapEntry)
    constructor(null_: Float2ReferenceOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatReferencePair<V>;
    first(arg0: number): FloatReferencePair<V>;
    firstFloat(): number;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatReferencePair<V>;
    key(arg0: number): FloatReferencePair<V>;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatReferencePair<V>;
    left(arg0: number): FloatReferencePair<V>;
    leftFloat(): number;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): FloatReferencePair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}