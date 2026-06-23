import type { Byte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharFunction.d.ts'
import type { Byte2IntFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntFunction.d.ts'
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
import type { Double2IntFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntFunction.d.ts'
import type { Float2CharFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharFunction.d.ts'
import type { Float2IntFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntFunction.d.ts'
import type { Int2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteFunction.d.ts'
import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Int2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleFunction.d.ts'
import type { Int2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatFunction.d.ts'
import type { Int2IntFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { Int2LongFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongFunction.d.ts'
import type { Int2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectFunction.d.ts'
import type { Int2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceFunction.d.ts'
import type { Int2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortFunction.d.ts'
import type { Long2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharFunction.d.ts'
import type { Long2IntFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntFunction.d.ts'
import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
import type { Object2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Reference2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntFunction.d.ts'
import type { Short2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharFunction.d.ts'
import type { Short2IntFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntFunction.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2CharFunctions$SynchronizedFunction extends Object implements Int2CharFunction, Serializable {
    constructor(arg0: (param0: number) => string)
    constructor(arg0: (param0: number) => string, arg1: Object)
    // private function: (param0: number) => string;
    // private sync: Object;
    andThen<T extends unknown>(arg0: (param0: string) => T): (param0: number) => T;
    andThenByte(arg0: (param0: string) => number): (param0: number) => number;
    andThenChar(arg0: (param0: string) => string): (param0: number) => string;
    andThenDouble(arg0: (param0: string) => number): (param0: number) => number;
    andThenFloat(arg0: (param0: string) => number): (param0: number) => number;
    andThenInt(arg0: (param0: string) => number): (param0: number) => number;
    andThenLong(arg0: (param0: string) => number): (param0: number) => number;
    andThenObject<T extends unknown>(arg0: (param0: string) => T): (param0: number) => T;
    andThenReference<T extends unknown>(arg0: (param0: string) => T): (param0: number) => T;
    andThenShort(arg0: (param0: string) => number): (param0: number) => number;
    apply(arg0: number): string;
    applyAsInt(arg0: number): number;
    clear(): void;
    compose<T extends unknown>(arg0: (param0: T) => number): (param0: T) => string;
    composeByte(arg0: (param0: number) => number): (param0: number) => string;
    composeChar(arg0: (param0: string) => number): (param0: string) => string;
    composeDouble(arg0: (param0: number) => number): (param0: number) => string;
    composeFloat(arg0: (param0: number) => number): (param0: number) => string;
    composeInt(arg0: (param0: number) => number): (param0: number) => string;
    composeLong(arg0: (param0: number) => number): (param0: number) => string;
    composeObject<T extends unknown>(arg0: (param0: Object) => number): (param0: Object) => string;
    composeReference<T extends unknown>(arg0: (param0: Object) => number): (param0: Object) => string;
    composeShort(arg0: (param0: number) => number): (param0: number) => string;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): string;
    get(arg0: number): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: number, arg1: string): string;
    hashCode(): number;
    put(arg0: number, arg1: string): string;
    remove(arg0: Object): string;
    remove(arg0: number): string;
    size(): number;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}