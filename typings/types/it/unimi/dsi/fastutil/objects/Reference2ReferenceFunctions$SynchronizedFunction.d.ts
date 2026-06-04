import type { Byte2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceFunction.d.ts'
import type { Char2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunction.d.ts'
import type { Double2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceFunction.d.ts'
import type { Float2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceFunction.d.ts'
import type { Int2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceFunction.d.ts'
import type { Long2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceFunction.d.ts'
import type { Object2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceFunction.d.ts'
import type { Reference2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteFunction.d.ts'
import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Reference2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleFunction.d.ts'
import type { Reference2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatFunction.d.ts'
import type { Reference2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntFunction.d.ts'
import type { Reference2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongFunction.d.ts'
import type { Reference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectFunction.d.ts'
import type { Reference2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceFunction.d.ts'
import type { Reference2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortFunction.d.ts'
import type { Short2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceFunction.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceFunctions$SynchronizedFunction<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Reference2ReferenceFunction<K, V>, Serializable {
    constructor(arg0: (param0: K) => V)
    constructor(arg0: (param0: K) => V, arg1: Object)
    // private function: (param0: K) => V;
    // private sync: Object;
    andThenByte(arg0: (param0: V) => kotlin.Byte): (param0: K) => kotlin.Byte;
    andThenChar(arg0: (param0: V) => kotlin.Char): (param0: K) => kotlin.Char;
    andThenDouble(arg0: (param0: V) => kotlin.Double): (param0: K) => kotlin.Double;
    andThenFloat(arg0: (param0: V) => kotlin.Float): (param0: K) => kotlin.Float;
    andThenInt(arg0: (param0: V) => kotlin.Int): (param0: K) => kotlin.Int;
    andThenLong(arg0: (param0: V) => kotlin.Long): (param0: K) => kotlin.Long;
    andThenObject(arg0: (param0: V) => T): (param0: K) => T;
    andThenReference(arg0: (param0: V) => T): (param0: K) => T;
    andThenShort(arg0: (param0: V) => kotlin.Short): (param0: K) => kotlin.Short;
    apply(arg0: K): V;
    clear(): void;
    composeByte(arg0: (param0: K) => unknown): (param0: V) => unknown;
    composeChar(arg0: (param0: K) => unknown): (param0: V) => unknown;
    composeDouble(arg0: (param0: K) => unknown): (param0: V) => unknown;
    composeFloat(arg0: (param0: K) => unknown): (param0: V) => unknown;
    composeInt(arg0: (param0: K) => unknown): (param0: V) => unknown;
    composeLong(arg0: (param0: K) => unknown): (param0: V) => unknown;
    composeObject(arg0: (param0: T) => K): (param0: T) => V;
    composeReference(arg0: (param0: T) => K): (param0: T) => V;
    composeShort(arg0: (param0: K) => unknown): (param0: V) => unknown;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): V;
    getOrDefault(arg0: Object, arg1: V): V;
    hashCode(): number;
    put(arg0: K, arg1: V): V;
    remove(arg0: Object): V;
    size(): number;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}