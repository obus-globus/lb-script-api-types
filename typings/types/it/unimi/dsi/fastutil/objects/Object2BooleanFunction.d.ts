import type { Function } from '../../../../../it/unimi/dsi/fastutil/Function.d.ts'
import type { Boolean2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2ByteFunction.d.ts'
import type { Boolean2CharFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2CharFunction.d.ts'
import type { Boolean2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2DoubleFunction.d.ts'
import type { Boolean2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2FloatFunction.d.ts'
import type { Boolean2IntFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2IntFunction.d.ts'
import type { Boolean2LongFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2LongFunction.d.ts'
import type { Boolean2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2ObjectFunction.d.ts'
import type { Boolean2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2ReferenceFunction.d.ts'
import type { Boolean2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2ShortFunction.d.ts'
import type { Byte2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanFunction.d.ts'
import type { Byte2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectFunction.d.ts'
import type { Char2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanFunction.d.ts'
import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { Double2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanFunction.d.ts'
import type { Double2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectFunction.d.ts'
import type { Float2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanFunction.d.ts'
import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { Int2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanFunction.d.ts'
import type { Int2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectFunction.d.ts'
import type { Long2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanFunction.d.ts'
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
import type { Reference2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanFunction.d.ts'
import type { Reference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectFunction.d.ts'
import type { Short2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanFunction.d.ts'
import type { Short2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectFunction.d.ts'
import type { Function as Function_2 } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Object2BooleanFunction<K extends unknown> extends Function<K, boolean>, Predicate<K>, Object {
    and(arg0: (param0: K) => boolean): (param0: K) => boolean;
    andThen<T extends unknown>(arg0: (param0: boolean) => T): (param0: K) => T;
    andThenByte(arg0: (param0: boolean) => number): (param0: Object) => number;
    andThenChar(arg0: (param0: boolean) => string): (param0: Object) => string;
    andThenDouble(arg0: (param0: boolean) => number): (param0: Object) => number;
    andThenFloat(arg0: (param0: boolean) => number): (param0: Object) => number;
    andThenInt(arg0: (param0: boolean) => number): (param0: Object) => number;
    andThenLong(arg0: (param0: boolean) => number): (param0: Object) => number;
    andThenObject<T extends unknown>(arg0: (param0: boolean) => T): (param0: Object) => T;
    andThenReference<T extends unknown>(arg0: (param0: boolean) => T): (param0: Object) => T;
    andThenShort(arg0: (param0: boolean) => number): (param0: Object) => number;
    apply(arg0: K): boolean;
    clear(): void;
    composeByte(arg0: (param0: number) => K): (param0: number) => boolean;
    composeChar(arg0: (param0: string) => K): (param0: string) => boolean;
    composeDouble(arg0: (param0: number) => K): (param0: number) => boolean;
    composeFloat(arg0: (param0: number) => K): (param0: number) => boolean;
    composeInt(arg0: (param0: number) => K): (param0: number) => boolean;
    composeLong(arg0: (param0: number) => K): (param0: number) => boolean;
    composeObject<T extends unknown>(arg0: (param0: Object) => K): (param0: Object) => boolean;
    composeReference<T extends unknown>(arg0: (param0: Object) => K): (param0: Object) => boolean;
    composeShort(arg0: (param0: number) => K): (param0: number) => boolean;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    get(arg0: Object): boolean;
    getBoolean(arg0: Object): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    negate(): (param0: K) => boolean;
    or(arg0: (param0: K) => boolean): (param0: K) => boolean;
    put(arg0: K, arg1: boolean): boolean;
    remove(arg0: Object): boolean;
    removeBoolean(arg0: Object): boolean;
    size(): number;
    test(arg0: K): boolean;
}