import type { Function } from '../../../../../it/unimi/dsi/fastutil/Function.d.ts'
import type { Byte2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatFunction.d.ts'
import type { Byte2IntFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntFunction.d.ts'
import type { Char2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatFunction.d.ts'
import type { Char2IntFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntFunction.d.ts'
import type { Double2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatFunction.d.ts'
import type { Double2IntFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntFunction.d.ts'
import type { Float2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteFunction.d.ts'
import type { Float2CharFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharFunction.d.ts'
import type { Float2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleFunction.d.ts'
import type { Float2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatFunction.d.ts'
import type { Float2LongFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongFunction.d.ts'
import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { Float2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceFunction.d.ts'
import type { Float2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortFunction.d.ts'
import type { Int2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteFunction.d.ts'
import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Int2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleFunction.d.ts'
import type { Int2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatFunction.d.ts'
import type { Int2IntFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { Int2LongFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongFunction.d.ts'
import type { Int2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectFunction.d.ts'
import type { Int2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceFunction.d.ts'
import type { Int2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortFunction.d.ts'
import type { Long2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatFunction.d.ts'
import type { Long2IntFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntFunction.d.ts'
import type { Object2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatFunction.d.ts'
import type { Object2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Reference2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatFunction.d.ts'
import type { Reference2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntFunction.d.ts'
import type { Short2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatFunction.d.ts'
import type { Short2IntFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntFunction.d.ts'
import type { DoubleToIntFunction } from '../../../../../java/util/function/DoubleToIntFunction.d.ts'
import type { Function as Function_2 } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Float2IntFunction extends Function<number, number>, DoubleToIntFunction, Object {
    andThen<T extends unknown>(arg0: (param0: number) => T): (param0: number) => T;
    andThenByte(arg0: (param0: number) => number): (param0: number) => number;
    andThenChar(arg0: (param0: number) => string): (param0: number) => string;
    andThenDouble(arg0: (param0: number) => number): (param0: number) => number;
    andThenFloat(arg0: (param0: number) => number): (param0: number) => number;
    andThenInt(arg0: (param0: number) => number): (param0: number) => number;
    andThenLong(arg0: (param0: number) => number): (param0: number) => number;
    andThenObject<T extends unknown>(arg0: (param0: number) => T): (param0: number) => T;
    andThenReference<T extends unknown>(arg0: (param0: number) => T): (param0: number) => T;
    andThenShort(arg0: (param0: number) => number): (param0: number) => number;
    apply(arg0: number): number;
    applyAsInt(arg0: number): number;
    clear(): void;
    compose<T extends unknown>(arg0: (param0: T) => number): (param0: T) => number;
    composeByte(arg0: (param0: number) => number): (param0: number) => number;
    composeChar(arg0: (param0: string) => number): (param0: string) => number;
    composeDouble(arg0: (param0: number) => number): (param0: number) => number;
    composeFloat(arg0: (param0: number) => number): (param0: number) => number;
    composeInt(arg0: (param0: number) => number): (param0: number) => number;
    composeLong(arg0: (param0: number) => number): (param0: number) => number;
    composeObject<T extends unknown>(arg0: (param0: Object) => number): (param0: Object) => number;
    composeReference<T extends unknown>(arg0: (param0: Object) => number): (param0: Object) => number;
    composeShort(arg0: (param0: number) => number): (param0: number) => number;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    get(arg0: Object): number;
    get(arg0: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: number, arg1: number): number;
    put(arg0: number, arg1: number): number;
    remove(arg0: Object): number;
    remove(arg0: number): number;
    size(): number;
}