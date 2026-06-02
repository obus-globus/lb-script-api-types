import type { Byte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharFunction.d.ts'
import type { Byte2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortFunction.d.ts'
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
import type { Double2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortFunction.d.ts'
import type { Float2CharFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharFunction.d.ts'
import type { Float2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortFunction.d.ts'
import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Int2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortFunction.d.ts'
import type { Long2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharFunction.d.ts'
import type { Long2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortFunction.d.ts'
import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
import type { Object2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortFunction.d.ts'
import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Reference2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortFunction.d.ts'
import type { Short2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteFunction.d.ts'
import type { Short2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharFunction.d.ts'
import type { Short2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleFunction.d.ts'
import type { Short2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatFunction.d.ts'
import type { Short2IntFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntFunction.d.ts'
import type { Short2LongFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongFunction.d.ts'
import type { Short2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectFunction.d.ts'
import type { Short2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceFunction.d.ts'
import type { Short2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortFunction.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ShortFunctions$SynchronizedFunction extends Object implements Char2ShortFunction, Serializable {
    constructor(arg0: (param0: string) => kotlin.Short)
    constructor(arg0: (param0: string) => kotlin.Short, arg1: Object)
    // private function: (param0: string) => kotlin.Short;
    // private sync: Object;
    andThen(arg0: (param0: number) => T): (param0: string) => T;
    andThenByte(arg0: (param0: number) => kotlin.Byte): (param0: string) => kotlin.Byte;
    andThenChar(arg0: (param0: number) => kotlin.Char): (param0: string) => kotlin.Char;
    andThenDouble(arg0: (param0: number) => kotlin.Double): (param0: string) => kotlin.Double;
    andThenFloat(arg0: (param0: number) => kotlin.Float): (param0: string) => kotlin.Float;
    andThenInt(arg0: (param0: number) => kotlin.Int): (param0: string) => kotlin.Int;
    andThenLong(arg0: (param0: number) => kotlin.Long): (param0: string) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenReference(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenShort(arg0: (param0: number) => kotlin.Short): (param0: string) => kotlin.Short;
    apply(arg0: string): number;
    applyAsInt(arg0: number): number;
    applyAsInt(arg0: number): number;
    clear(): void;
    compose(arg0: (param0: T) => string): (param0: T) => number;
    composeByte(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Short;
    composeChar(arg0: (param0: string) => kotlin.Char): (param0: string) => kotlin.Short;
    composeDouble(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Short;
    composeFloat(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Short;
    composeInt(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Short;
    composeLong(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Short;
    composeObject(arg0: (param0: T) => kotlin.Char): (param0: T) => kotlin.Short;
    composeReference(arg0: (param0: T) => kotlin.Char): (param0: T) => kotlin.Short;
    composeShort(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Short;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    get(arg0: Object): number;
    get(arg0: string): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: string, arg1: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: string, arg1: number): number;
    hashCode(): number;
    put(arg0: string, arg1: number): number;
    put(arg0: string, arg1: number): number;
    put(arg0: string, arg1: number): number;
    put(arg0: string, arg1: number): number;
    remove(arg0: Object): number;
    remove(arg0: string): number;
    remove(arg0: Object): number;
    remove(arg0: string): number;
    size(): number;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}