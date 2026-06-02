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
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectFunctions$PrimitiveFunction<V extends Object | number | string | boolean> extends Object implements Byte2ObjectFunction<V> {
    constructor(arg0: (param0: number) => V)
    // private function: (param0: number) => V;
    andThenByte(arg0: (param0: V) => kotlin.Byte): (param0: number) => kotlin.Byte;
    andThenChar(arg0: (param0: V) => kotlin.Char): (param0: number) => kotlin.Char;
    andThenDouble(arg0: (param0: V) => kotlin.Double): (param0: number) => kotlin.Double;
    andThenFloat(arg0: (param0: V) => kotlin.Float): (param0: number) => kotlin.Float;
    andThenInt(arg0: (param0: V) => kotlin.Int): (param0: number) => kotlin.Int;
    andThenLong(arg0: (param0: V) => kotlin.Long): (param0: number) => kotlin.Long;
    andThenObject(arg0: (param0: V) => T): (param0: T) => unknown;
    andThenReference(arg0: (param0: V) => T): (param0: T) => unknown;
    andThenShort(arg0: (param0: V) => kotlin.Short): (param0: number) => kotlin.Short;
    apply(arg0: number): V;
    compose(arg0: (param0: T) => number): (param0: T) => V;
    composeByte(arg0: (param0: number) => kotlin.Byte): (param0: V) => unknown;
    composeChar(arg0: (param0: string) => kotlin.Byte): (param0: V) => unknown;
    composeDouble(arg0: (param0: number) => kotlin.Byte): (param0: V) => unknown;
    composeFloat(arg0: (param0: number) => kotlin.Byte): (param0: V) => unknown;
    composeInt(arg0: (param0: number) => kotlin.Byte): (param0: V) => unknown;
    composeLong(arg0: (param0: number) => kotlin.Byte): (param0: V) => unknown;
    composeObject(arg0: (param0: T) => kotlin.Byte): (param0: T) => V;
    composeReference(arg0: (param0: T) => kotlin.Byte): (param0: T) => V;
    composeShort(arg0: (param0: number) => kotlin.Byte): (param0: V) => unknown;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    get(arg0: Object): V;
    get(arg0: Object): V;
    get(arg0: number): V;
    getOrDefault(arg0: Object, arg1: V): V;
    getOrDefault(arg0: number, arg1: V): V;
    getOrDefault(arg0: Object, arg1: V): V;
    getOrDefault(arg0: number, arg1: V): V;
    put(arg0: number, arg1: V): V;
    put(arg0: number, arg1: V): V;
    put(arg0: number, arg1: V): V;
    remove(arg0: Object): V;
    remove(arg0: number): V;
}