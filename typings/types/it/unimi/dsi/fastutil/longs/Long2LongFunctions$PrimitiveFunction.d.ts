import type { Byte2LongFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongFunction.d.ts'
import type { Char2LongFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongFunction.d.ts'
import type { Double2LongFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongFunction.d.ts'
import type { Float2LongFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongFunction.d.ts'
import type { Int2LongFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongFunction.d.ts'
import type { Long2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteFunction.d.ts'
import type { Long2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharFunction.d.ts'
import type { Long2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleFunction.d.ts'
import type { Long2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatFunction.d.ts'
import type { Long2IntFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntFunction.d.ts'
import type { Long2LongFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongFunction.d.ts'
import type { Long2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectFunction.d.ts'
import type { Long2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceFunction.d.ts'
import type { Long2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortFunction.d.ts'
import type { Object2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongFunction.d.ts'
import type { Reference2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongFunction.d.ts'
import type { Short2LongFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2LongFunctions$PrimitiveFunction extends Object implements Long2LongFunction {
    static identity(): (param0: number) => number;
    constructor(arg0: (param0: number) => number)
    // private function: (param0: number) => number;
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
    applyAsLong(arg0: number): number;
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
}