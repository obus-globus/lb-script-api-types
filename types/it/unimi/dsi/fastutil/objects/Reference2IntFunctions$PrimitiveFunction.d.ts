import type { Byte2IntFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntFunction.d.ts'
import type { Byte2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceFunction.d.ts'
import type { Char2IntFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntFunction.d.ts'
import type { Char2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunction.d.ts'
import type { Double2IntFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntFunction.d.ts'
import type { Double2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceFunction.d.ts'
import type { Float2IntFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntFunction.d.ts'
import type { Float2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceFunction.d.ts'
import type { Int2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteFunction.d.ts'
import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Int2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleFunction.d.ts'
import type { Int2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatFunction.d.ts'
import type { Int2IntFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { Int2LongFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongFunction.d.ts'
import type { Int2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectFunction.d.ts'
import type { Int2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceFunction.d.ts'
import type { Int2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortFunction.d.ts'
import type { Long2IntFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntFunction.d.ts'
import type { Long2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceFunction.d.ts'
import type { Object2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
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
import type { Short2IntFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntFunction.d.ts'
import type { Short2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2IntFunctions$PrimitiveFunction<K extends Object | number | string | boolean> extends Object implements Reference2IntFunction<K> {
    constructor(arg0: (param0: K) => number)
    // private function: (param0: K) => number;
    andThen(arg0: (param0: number) => T): (param0: K) => T;
    andThenByte(arg0: (param0: number) => kotlin.Byte): (param0: K) => kotlin.Byte;
    andThenChar(arg0: (param0: number) => kotlin.Char): (param0: K) => kotlin.Char;
    andThenDouble(arg0: (param0: number) => kotlin.Double): (param0: K) => kotlin.Double;
    andThenFloat(arg0: (param0: number) => kotlin.Float): (param0: K) => kotlin.Float;
    andThenInt(arg0: (param0: number) => kotlin.Int): (param0: K) => kotlin.Int;
    andThenLong(arg0: (param0: number) => kotlin.Long): (param0: K) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: K) => T;
    andThenReference(arg0: (param0: T) => unknown): (param0: K) => T;
    andThenShort(arg0: (param0: number) => kotlin.Short): (param0: K) => kotlin.Short;
    applyAsInt(arg0: K): number;
    composeByte(arg0: (param0: K) => unknown): (param0: number) => kotlin.Int;
    composeChar(arg0: (param0: K) => unknown): (param0: string) => kotlin.Int;
    composeDouble(arg0: (param0: K) => unknown): (param0: number) => kotlin.Int;
    composeFloat(arg0: (param0: K) => unknown): (param0: number) => kotlin.Int;
    composeInt(arg0: (param0: K) => unknown): (param0: number) => kotlin.Int;
    composeLong(arg0: (param0: K) => unknown): (param0: number) => kotlin.Int;
    composeObject(arg0: (param0: T) => K): (param0: T) => kotlin.Int;
    composeReference(arg0: (param0: T) => K): (param0: T) => kotlin.Int;
    composeShort(arg0: (param0: K) => unknown): (param0: number) => kotlin.Int;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    get(arg0: Object): number;
    get(arg0: Object): number;
    getInt(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    put(arg0: K, arg1: number): number;
    put(arg0: K, arg1: number): number;
    put(arg0: K, arg1: number): number;
    remove(arg0: Object): number;
    removeInt(arg0: Object): number;
}