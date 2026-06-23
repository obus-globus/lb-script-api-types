import type { Function } from '../../../../../it/unimi/dsi/fastutil/Function.d.ts'
import type { Byte2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectFunction.d.ts'
import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { Double2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectFunction.d.ts'
import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { Int2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectFunction.d.ts'
import type { Long2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectFunction.d.ts'
import type { Object2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteFunction.d.ts'
import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
import type { Object2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleFunction.d.ts'
import type { Object2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatFunction.d.ts'
import type { Object2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Object2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongFunction.d.ts'
import type { Object2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceFunction.d.ts'
import type { Object2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ShortFunction.d.ts'
import type { Reference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectFunction.d.ts'
import type { Short2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Object2ObjectFunction<K extends unknown, V extends unknown> extends Function<K, V>, Object {
    andThenByte(arg0: (param0: Object) => number): (param0: Object) => number;
    andThenChar(arg0: (param0: Object) => string): (param0: Object) => string;
    andThenDouble(arg0: (param0: Object) => number): (param0: Object) => number;
    andThenFloat(arg0: (param0: Object) => number): (param0: Object) => number;
    andThenInt(arg0: (param0: Object) => number): (param0: Object) => number;
    andThenLong(arg0: (param0: Object) => number): (param0: Object) => number;
    andThenObject<T extends unknown>(arg0: (param0: Object) => T): (param0: Object) => T;
    andThenReference<T extends unknown>(arg0: (param0: Object) => T): (param0: Object) => T;
    andThenShort(arg0: (param0: Object) => number): (param0: Object) => number;
    apply(arg0: K): V;
    clear(): void;
    composeByte(arg0: (param0: number) => K): (param0: number) => V;
    composeChar(arg0: (param0: string) => K): (param0: string) => V;
    composeDouble(arg0: (param0: number) => K): (param0: number) => V;
    composeFloat(arg0: (param0: number) => K): (param0: number) => V;
    composeInt(arg0: (param0: number) => K): (param0: number) => V;
    composeLong(arg0: (param0: number) => K): (param0: number) => V;
    composeObject<T extends unknown>(arg0: (param0: Object) => K): (param0: Object) => V;
    composeReference<T extends unknown>(arg0: (param0: Object) => K): (param0: Object) => V;
    composeShort(arg0: (param0: number) => K): (param0: number) => V;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    get(arg0: Object): V;
    getOrDefault(arg0: Object, arg1: V): V;
    put(arg0: K, arg1: V): V;
    remove(arg0: Object): V;
    size(): number;
}