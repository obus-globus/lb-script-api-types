import type { Byte2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteFunction.d.ts'
import type { Byte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharFunction.d.ts'
import type { Byte2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleFunction.d.ts'
import type { Byte2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatFunction.d.ts'
import type { Byte2IntFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntFunction.d.ts'
import type { Byte2LongFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongFunction.d.ts'
import type { Byte2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectFunction.d.ts'
import type { Byte2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceFunction.d.ts'
import type { Byte2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortFunction.d.ts'
import type { Char2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteFunction.d.ts'
import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { Double2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteFunction.d.ts'
import type { Double2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectFunction.d.ts'
import type { Float2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteFunction.d.ts'
import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { Int2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteFunction.d.ts'
import type { Int2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectFunction.d.ts'
import type { Long2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteFunction.d.ts'
import type { Long2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectFunction.d.ts'
import type { Object2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteFunction.d.ts'
import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
import type { Object2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleFunction.d.ts'
import type { Object2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatFunction.d.ts'
import type { Object2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Object2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongFunction.d.ts'
import type { Object2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectFunction.d.ts'
import type { Object2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceFunction.d.ts'
import type { Object2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortFunction.d.ts'
import type { Reference2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteFunction.d.ts'
import type { Reference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectFunction.d.ts'
import type { Short2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteFunction.d.ts'
import type { Short2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectFunction.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ByteFunctions$SynchronizedFunction<K extends unknown> extends Object implements Object2ByteFunction<K>, Serializable {
    constructor(arg0: (param0: Object) => number)
    constructor(arg0: (param0: Object) => number, arg1: Object)
    // private function: (param0: Object) => number;
    // private sync: Object;
    andThen<T extends unknown>(arg0: (param0: number) => T): (param0: K) => T;
    andThenByte(arg0: (param0: number) => number): (param0: Object) => number;
    andThenChar(arg0: (param0: number) => string): (param0: Object) => string;
    andThenDouble(arg0: (param0: number) => number): (param0: Object) => number;
    andThenFloat(arg0: (param0: number) => number): (param0: Object) => number;
    andThenInt(arg0: (param0: number) => number): (param0: Object) => number;
    andThenLong(arg0: (param0: number) => number): (param0: Object) => number;
    andThenObject<T extends unknown>(arg0: (param0: number) => T): (param0: Object) => T;
    andThenReference<T extends unknown>(arg0: (param0: number) => T): (param0: Object) => T;
    andThenShort(arg0: (param0: number) => number): (param0: Object) => number;
    apply(arg0: K): number;
    applyAsInt(arg0: K): number;
    clear(): void;
    composeByte(arg0: (param0: number) => K): (param0: number) => number;
    composeChar(arg0: (param0: string) => K): (param0: string) => number;
    composeDouble(arg0: (param0: number) => K): (param0: number) => number;
    composeFloat(arg0: (param0: number) => K): (param0: number) => number;
    composeInt(arg0: (param0: number) => K): (param0: number) => number;
    composeLong(arg0: (param0: number) => K): (param0: number) => number;
    composeObject<T extends unknown>(arg0: (param0: Object) => K): (param0: Object) => number;
    composeReference<T extends unknown>(arg0: (param0: Object) => K): (param0: Object) => number;
    composeShort(arg0: (param0: number) => K): (param0: number) => number;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    getByte(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    hashCode(): number;
    put(arg0: K, arg1: number): number;
    remove(arg0: Object): number;
    removeByte(arg0: Object): number;
    size(): number;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}