import type { Function } from '../../../../../it/unimi/dsi/fastutil/Function.d.ts'
import type { Byte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharFunction.d.ts'
import type { Byte2IntFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntFunction.d.ts'
import type { Char2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteFunction.d.ts'
import type { Char2CharFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharFunction.d.ts'
import type { Char2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleFunction.d.ts'
import type { Char2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatFunction.d.ts'
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
import type { Function as Function_2 } from '../../../../../java/util/function/Function.d.ts'
import type { IntUnaryOperator } from '../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Char2IntFunction extends Function<string, number>, IntUnaryOperator, Object {
    andThen<T extends unknown>(arg0: (param0: number) => T): (param0: string) => T;
    andThen(arg0: (param0: number) => number): (param0: number) => number;
    andThenByte(arg0: (param0: number) => number): (param0: string) => number;
    andThenChar(arg0: (param0: number) => string): (param0: string) => string;
    andThenDouble(arg0: (param0: number) => number): (param0: string) => number;
    andThenFloat(arg0: (param0: number) => number): (param0: string) => number;
    andThenInt(arg0: (param0: number) => number): (param0: string) => number;
    andThenLong(arg0: (param0: number) => number): (param0: string) => number;
    andThenObject<T extends unknown>(arg0: (param0: number) => T): (param0: string) => T;
    andThenReference<T extends unknown>(arg0: (param0: number) => T): (param0: string) => T;
    andThenShort(arg0: (param0: number) => number): (param0: string) => number;
    apply(arg0: string): number;
    applyAsInt(arg0: number): number;
    clear(): void;
    compose<T extends unknown>(arg0: (param0: T) => string): (param0: T) => number;
    compose(arg0: (param0: number) => number): (param0: number) => number;
    composeByte(arg0: (param0: number) => string): (param0: number) => number;
    composeChar(arg0: (param0: string) => string): (param0: string) => number;
    composeDouble(arg0: (param0: number) => string): (param0: number) => number;
    composeFloat(arg0: (param0: number) => string): (param0: number) => number;
    composeInt(arg0: (param0: number) => string): (param0: number) => number;
    composeLong(arg0: (param0: number) => string): (param0: number) => number;
    composeObject<T extends unknown>(arg0: (param0: Object) => string): (param0: Object) => number;
    composeReference<T extends unknown>(arg0: (param0: Object) => string): (param0: Object) => number;
    composeShort(arg0: (param0: number) => string): (param0: number) => number;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    get(arg0: Object): number;
    get(arg0: string): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: string, arg1: number): number;
    put(arg0: string, arg1: number): number;
    remove(arg0: Object): number;
    remove(arg0: string): number;
    size(): number;
}