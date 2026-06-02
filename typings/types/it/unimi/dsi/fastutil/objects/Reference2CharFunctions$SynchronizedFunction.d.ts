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
export class Reference2CharFunctions$SynchronizedFunction<K extends Object | number | string | boolean> extends Object implements Reference2CharFunction<K>, Serializable {
    constructor(arg0: (param0: K) => kotlin.Char)
    constructor(arg0: (param0: K) => kotlin.Char, arg1: Object)
    // private function: (param0: K) => kotlin.Char;
    // private sync: Object;
    andThen(arg0: (param0: string) => T): (param0: K) => T;
    andThenByte(arg0: (param0: string) => kotlin.Byte): (param0: K) => kotlin.Byte;
    andThenChar(arg0: (param0: string) => kotlin.Char): (param0: K) => kotlin.Char;
    andThenDouble(arg0: (param0: string) => kotlin.Double): (param0: K) => kotlin.Double;
    andThenFloat(arg0: (param0: string) => kotlin.Float): (param0: K) => kotlin.Float;
    andThenInt(arg0: (param0: string) => kotlin.Int): (param0: K) => kotlin.Int;
    andThenLong(arg0: (param0: string) => kotlin.Long): (param0: K) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: K) => T;
    andThenReference(arg0: (param0: T) => unknown): (param0: K) => T;
    andThenShort(arg0: (param0: string) => kotlin.Short): (param0: K) => kotlin.Short;
    apply(arg0: K): string;
    applyAsInt(arg0: K): number;
    applyAsInt(arg0: K): number;
    clear(): void;
    composeByte(arg0: (param0: K) => unknown): (param0: number) => kotlin.Char;
    composeChar(arg0: (param0: K) => unknown): (param0: string) => kotlin.Char;
    composeDouble(arg0: (param0: K) => unknown): (param0: number) => kotlin.Char;
    composeFloat(arg0: (param0: K) => unknown): (param0: number) => kotlin.Char;
    composeInt(arg0: (param0: K) => unknown): (param0: number) => kotlin.Char;
    composeLong(arg0: (param0: K) => unknown): (param0: number) => kotlin.Char;
    composeObject(arg0: (param0: T) => K): (param0: T) => kotlin.Char;
    composeReference(arg0: (param0: T) => K): (param0: T) => kotlin.Char;
    composeShort(arg0: (param0: K) => unknown): (param0: number) => kotlin.Char;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): string;
    get(arg0: Object): string;
    getChar(arg0: Object): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: Object, arg1: string): string;
    hashCode(): number;
    put(arg0: K, arg1: string): string;
    put(arg0: K, arg1: string): string;
    put(arg0: K, arg1: string): string;
    put(arg0: K, arg1: string): string;
    remove(arg0: Object): string;
    remove(arg0: Object): string;
    removeChar(arg0: Object): string;
    removeChar(arg0: Object): string;
    size(): number;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}