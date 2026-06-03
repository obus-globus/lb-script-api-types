import type { Byte2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortFunction.d.ts'
import type { Char2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortFunction.d.ts'
import type { Double2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortFunction.d.ts'
import type { Float2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortFunction.d.ts'
import type { Int2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortFunction.d.ts'
import type { Long2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortFunction.d.ts'
import type { Object2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortFunction.d.ts'
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
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ShortFunctions$PrimitiveFunction extends Object implements Short2ShortFunction {
    static identity(): (param0: number) => kotlin.Short;
    constructor(arg0: (param0: number) => number)
    // private function: (param0: number) => number;
    andThen(arg0: (param0: number) => T): (param0: number) => T;
    andThenByte(arg0: (param0: number) => kotlin.Byte): (param0: number) => kotlin.Byte;
    andThenChar(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Char;
    andThenDouble(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Double;
    andThenFloat(arg0: (param0: number) => kotlin.Float): (param0: number) => kotlin.Float;
    andThenInt(arg0: (param0: number) => kotlin.Int): (param0: number) => kotlin.Int;
    andThenLong(arg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenReference(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenShort(arg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    applyAsInt(arg0: number): number;
    compose(arg0: (param0: T) => number): (param0: T) => number;
    composeByte(arg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    composeChar(arg0: (param0: string) => kotlin.Short): (param0: string) => kotlin.Short;
    composeDouble(arg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    composeFloat(arg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    composeInt(arg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    composeLong(arg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    composeObject(arg0: (param0: T) => kotlin.Short): (param0: T) => kotlin.Short;
    composeReference(arg0: (param0: T) => kotlin.Short): (param0: T) => kotlin.Short;
    composeShort(arg0: (param0: number) => kotlin.Short): (param0: number) => kotlin.Short;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    get(arg0: Object): number;
    get(arg0: Object): number;
    get(arg0: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: number, arg1: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: number, arg1: number): number;
    put(arg0: number, arg1: number): number;
    put(arg0: number, arg1: number): number;
    put(arg0: number, arg1: number): number;
    put(arg0: number, arg1: number): number;
    remove(arg0: Object): number;
    remove(arg0: number): number;
}