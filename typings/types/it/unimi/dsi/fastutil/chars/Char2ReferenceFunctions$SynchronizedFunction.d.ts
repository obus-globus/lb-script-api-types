import type { Byte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharFunction.d.ts'
import type { Byte2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceFunction.d.ts'
import type { Char2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteFunction.d.ts'
import type { Char2CharFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharFunction.d.ts'
import type { Char2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleFunction.d.ts'
import type { Char2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatFunction.d.ts'
import type { Char2IntFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntFunction.d.ts'
import type { Char2LongFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongFunction.d.ts'
import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { Char2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunction.d.ts'
import type { Char2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortFunction.d.ts'
import type { Double2CharFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharFunction.d.ts'
import type { Double2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceFunction.d.ts'
import type { Float2CharFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharFunction.d.ts'
import type { Float2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceFunction.d.ts'
import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Int2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceFunction.d.ts'
import type { Long2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharFunction.d.ts'
import type { Long2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceFunction.d.ts'
import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
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
import type { Short2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharFunction.d.ts'
import type { Short2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceFunction.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceFunctions$SynchronizedFunction<V extends unknown> extends Object implements Char2ReferenceFunction<V>, Serializable {
    constructor(arg0: (param0: string) => V)
    constructor(arg0: (param0: string) => V, arg1: Object)
    // private function: (param0: string) => V;
    // private sync: Object;
    andThenByte(arg0: (param0: Object) => number): (param0: string) => number;
    andThenChar(arg0: (param0: Object) => string): (param0: string) => string;
    andThenDouble(arg0: (param0: Object) => number): (param0: string) => number;
    andThenFloat(arg0: (param0: Object) => number): (param0: string) => number;
    andThenInt(arg0: (param0: Object) => number): (param0: string) => number;
    andThenLong(arg0: (param0: Object) => number): (param0: string) => number;
    andThenObject<T extends unknown>(arg0: (param0: Object) => T): (param0: string) => T;
    andThenReference<T extends unknown>(arg0: (param0: Object) => T): (param0: string) => T;
    andThenShort(arg0: (param0: Object) => number): (param0: string) => number;
    apply(arg0: number): V;
    apply(arg0: string): V;
    clear(): void;
    compose<T extends unknown>(arg0: (param0: T) => string): (param0: T) => V;
    composeByte(arg0: (param0: number) => string): (param0: number) => V;
    composeChar(arg0: (param0: string) => string): (param0: string) => V;
    composeDouble(arg0: (param0: number) => string): (param0: number) => V;
    composeFloat(arg0: (param0: number) => string): (param0: number) => V;
    composeInt(arg0: (param0: number) => string): (param0: number) => V;
    composeLong(arg0: (param0: number) => string): (param0: number) => V;
    composeObject<T extends unknown>(arg0: (param0: Object) => string): (param0: Object) => V;
    composeReference<T extends unknown>(arg0: (param0: Object) => string): (param0: Object) => V;
    composeShort(arg0: (param0: number) => string): (param0: number) => V;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): V;
    get(arg0: string): V;
    getOrDefault(arg0: Object, arg1: V): V;
    getOrDefault(arg0: string, arg1: V): V;
    hashCode(): number;
    put(arg0: string, arg1: V): V;
    remove(arg0: Object): V;
    remove(arg0: string): V;
    size(): number;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}