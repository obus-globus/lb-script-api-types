import type { Byte2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleFunction.d.ts'
import type { Byte2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatFunction.d.ts'
import type { Char2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleFunction.d.ts'
import type { Char2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatFunction.d.ts'
import type { Double2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteFunction.d.ts'
import type { Double2CharFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharFunction.d.ts'
import type { Double2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleFunction.d.ts'
import type { Double2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatFunction.d.ts'
import type { Double2IntFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntFunction.d.ts'
import type { Double2LongFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongFunction.d.ts'
import type { Double2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectFunction.d.ts'
import type { Double2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceFunction.d.ts'
import type { Double2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortFunction.d.ts'
import type { Float2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteFunction.d.ts'
import type { Float2CharFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharFunction.d.ts'
import type { Float2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleFunction.d.ts'
import type { Float2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatFunction.d.ts'
import type { Float2IntFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntFunction.d.ts'
import type { Float2LongFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongFunction.d.ts'
import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { Float2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceFunction.d.ts'
import type { Float2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortFunction.d.ts'
import type { Int2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleFunction.d.ts'
import type { Int2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatFunction.d.ts'
import type { Long2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleFunction.d.ts'
import type { Long2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatFunction.d.ts'
import type { Object2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleFunction.d.ts'
import type { Object2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatFunction.d.ts'
import type { Reference2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleFunction.d.ts'
import type { Reference2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatFunction.d.ts'
import type { Short2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleFunction.d.ts'
import type { Short2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractDouble2FloatFunction extends Object implements Double2FloatFunction, Serializable {
    constructor()
    // private defRetValue: number;
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
    applyAsDouble(arg0: number): number;
    compose(arg0: (param0: T) => number): (param0: T) => number;
    composeByte(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Float;
    composeChar(arg0: (param0: string) => kotlin.Double): (param0: string) => kotlin.Float;
    composeDouble(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Float;
    composeFloat(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Float;
    composeInt(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Float;
    composeLong(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Float;
    composeObject(arg0: (param0: T) => kotlin.Double): (param0: T) => kotlin.Float;
    composeReference(arg0: (param0: T) => kotlin.Double): (param0: T) => kotlin.Float;
    composeShort(arg0: (param0: number) => kotlin.Double): (param0: number) => kotlin.Float;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    get(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: number, arg1: number): number;
    put(arg0: number, arg1: number): number;
    put(arg0: number, arg1: number): number;
    remove(arg0: Object): number;
    remove(arg0: number): number;
}