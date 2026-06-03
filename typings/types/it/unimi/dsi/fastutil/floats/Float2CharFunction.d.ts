import type { Function } from '../../../../../it/unimi/dsi/fastutil/Function.d.ts'
import type { Byte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharFunction.d.ts'
import type { Byte2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatFunction.d.ts'
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
import type { Double2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatFunction.d.ts'
import type { Float2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteFunction.d.ts'
import type { Float2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleFunction.d.ts'
import type { Float2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatFunction.d.ts'
import type { Float2IntFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntFunction.d.ts'
import type { Float2LongFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongFunction.d.ts'
import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { Float2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceFunction.d.ts'
import type { Float2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortFunction.d.ts'
import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Int2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatFunction.d.ts'
import type { Long2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharFunction.d.ts'
import type { Long2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatFunction.d.ts'
import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
import type { Object2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatFunction.d.ts'
import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Reference2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatFunction.d.ts'
import type { Short2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharFunction.d.ts'
import type { Short2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatFunction.d.ts'
import type { DoubleToIntFunction } from '../../../../../java/util/function/DoubleToIntFunction.d.ts'
import type { Function as Function_2 } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Float2CharFunction extends Function<number, string>, DoubleToIntFunction, Object{
    andThen(arg0: (param0: string) => T): (param0: number) => T;
    andThenByte(arg0: (param0: string) => kotlin.Byte): (param0: number) => kotlin.Byte;
    andThenChar(arg0: (param0: string) => kotlin.Char): (param0: number) => kotlin.Char;
    andThenDouble(arg0: (param0: string) => kotlin.Double): (param0: number) => kotlin.Double;
    andThenFloat(arg0: (param0: string) => kotlin.Float): (param0: number) => kotlin.Float;
    andThenInt(arg0: (param0: string) => kotlin.Int): (param0: number) => kotlin.Int;
    andThenLong(arg0: (param0: string) => kotlin.Long): (param0: number) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenReference(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenShort(arg0: (param0: string) => kotlin.Short): (param0: number) => kotlin.Short;
    apply<V extends Object | number | string | boolean, K extends Object | number | string | boolean>(arg0: K): V;
    applyAsInt(arg0: number): number;
    clear(): void;
    compose(arg0: (param0: T) => number): (param0: T) => string;
    composeByte(arg0: (param0: number) => kotlin.Float): (param0: number) => kotlin.Char;
    composeChar(arg0: (param0: string) => kotlin.Float): (param0: string) => kotlin.Char;
    composeDouble(arg0: (param0: number) => kotlin.Float): (param0: number) => kotlin.Char;
    composeFloat(arg0: (param0: number) => kotlin.Float): (param0: number) => kotlin.Char;
    composeInt(arg0: (param0: number) => kotlin.Float): (param0: number) => kotlin.Char;
    composeLong(arg0: (param0: number) => kotlin.Float): (param0: number) => kotlin.Char;
    composeObject(arg0: (param0: T) => kotlin.Float): (param0: T) => kotlin.Char;
    composeReference(arg0: (param0: T) => kotlin.Float): (param0: T) => kotlin.Char;
    composeShort(arg0: (param0: number) => kotlin.Float): (param0: number) => kotlin.Char;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    get(arg0: Object): string;
    get(arg0: number): string;
    getOrDefault<V extends Object | number | string | boolean>(arg0: Object, arg1: V): V;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: number, arg1: string): string;
    put<V extends Object | number | string | boolean, K extends Object | number | string | boolean>(arg0: K, arg1: V): V;
    put(arg0: number, arg1: string): string;
    put(arg0: number, arg1: string): string;
    remove<V extends Object | number | string | boolean>(arg0: Object): V;
    remove(arg0: Object): string;
    remove(arg0: number): string;
    size(): number;
}