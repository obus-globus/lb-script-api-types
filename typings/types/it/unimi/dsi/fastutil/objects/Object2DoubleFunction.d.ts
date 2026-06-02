import type { Function } from '../../../../../it/unimi/dsi/fastutil/Function.d.ts'
import type { Byte2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleFunction.d.ts'
import type { Byte2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectFunction.d.ts'
import type { Char2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleFunction.d.ts'
import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { Double2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteFunction.d.ts'
import type { Double2CharFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharFunction.d.ts'
import type { Double2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleFunction.d.ts'
import type { Double2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatFunction.d.ts'
import type { Double2IntFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntFunction.d.ts'
import type { Double2LongFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongFunction.d.ts'
import type { Double2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectFunction.d.ts'
import type { Double2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceFunction.d.ts'
import type { Double2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortFunction.d.ts'
import type { Float2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleFunction.d.ts'
import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { Int2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleFunction.d.ts'
import type { Int2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectFunction.d.ts'
import type { Long2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleFunction.d.ts'
import type { Long2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectFunction.d.ts'
import type { Object2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteFunction.d.ts'
import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
import type { Object2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatFunction.d.ts'
import type { Object2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Object2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongFunction.d.ts'
import type { Object2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectFunction.d.ts'
import type { Object2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceFunction.d.ts'
import type { Object2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortFunction.d.ts'
import type { Reference2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleFunction.d.ts'
import type { Reference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectFunction.d.ts'
import type { Short2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleFunction.d.ts'
import type { Short2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Object2DoubleFunction<K extends Object | number | string | boolean> extends Function<K, number>, ToDoubleFunction<K>, Object{
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
    apply<V extends Object | number | string | boolean>(arg0: K): V;
    applyAsDouble(arg0: K): number;
    clear(): void;
    composeByte(arg0: (param0: K) => unknown): (param0: number) => kotlin.Double;
    composeChar(arg0: (param0: K) => unknown): (param0: string) => kotlin.Double;
    composeDouble(arg0: (param0: K) => unknown): (param0: number) => kotlin.Double;
    composeFloat(arg0: (param0: K) => unknown): (param0: number) => kotlin.Double;
    composeInt(arg0: (param0: K) => unknown): (param0: number) => kotlin.Double;
    composeLong(arg0: (param0: K) => unknown): (param0: number) => kotlin.Double;
    composeObject(arg0: (param0: T) => K): (param0: T) => kotlin.Double;
    composeReference(arg0: (param0: T) => K): (param0: T) => kotlin.Double;
    composeShort(arg0: (param0: K) => unknown): (param0: number) => kotlin.Double;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    get(arg0: Object): number;
    getDouble(arg0: Object): number;
    getOrDefault<V extends Object | number | string | boolean>(arg0: Object, arg1: V): V;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    put<V extends Object | number | string | boolean>(arg0: K, arg1: V): V;
    put(arg0: K, arg1: number): number;
    put(arg0: K, arg1: number): number;
    remove<V extends Object | number | string | boolean>(arg0: Object): V;
    remove(arg0: Object): number;
    removeDouble(arg0: Object): number;
    size(): number;
}