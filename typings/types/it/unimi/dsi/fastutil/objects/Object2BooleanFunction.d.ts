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
export interface Object2BooleanFunction<K extends Object | number | string | boolean> extends Function<K, boolean>, Predicate<K>, Object{
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    andThen(arg0: (param0: boolean) => T): (param0: K) => T;
    andThenByte(arg0: (param0: boolean) => kotlin.Byte): (param0: K) => kotlin.Byte;
    andThenChar(arg0: (param0: boolean) => kotlin.Char): (param0: K) => kotlin.Char;
    andThenDouble(arg0: (param0: boolean) => kotlin.Double): (param0: K) => kotlin.Double;
    andThenFloat(arg0: (param0: boolean) => kotlin.Float): (param0: K) => kotlin.Float;
    andThenInt(arg0: (param0: boolean) => kotlin.Int): (param0: K) => kotlin.Int;
    andThenLong(arg0: (param0: boolean) => kotlin.Long): (param0: K) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: K) => T;
    andThenReference(arg0: (param0: T) => unknown): (param0: K) => T;
    andThenShort(arg0: (param0: boolean) => kotlin.Short): (param0: K) => kotlin.Short;
    apply<V extends Object | number | string | boolean>(arg0: K): V;
    clear(): void;
    composeByte(arg0: (param0: K) => unknown): (param0: number) => kotlin.Boolean;
    composeChar(arg0: (param0: K) => unknown): (param0: string) => kotlin.Boolean;
    composeDouble(arg0: (param0: K) => unknown): (param0: number) => kotlin.Boolean;
    composeFloat(arg0: (param0: K) => unknown): (param0: number) => kotlin.Boolean;
    composeInt(arg0: (param0: K) => unknown): (param0: number) => kotlin.Boolean;
    composeLong(arg0: (param0: K) => unknown): (param0: number) => kotlin.Boolean;
    composeObject(arg0: (param0: T) => K): (param0: T) => kotlin.Boolean;
    composeReference(arg0: (param0: T) => K): (param0: T) => kotlin.Boolean;
    composeShort(arg0: (param0: K) => unknown): (param0: number) => kotlin.Boolean;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    get(arg0: Object): boolean;
    getBoolean(arg0: Object): boolean;
    getOrDefault<V extends Object | number | string | boolean>(arg0: Object, arg1: V): V;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    put<V extends Object | number | string | boolean>(arg0: K, arg1: V): V;
    put(arg0: K, arg1: boolean): boolean;
    put(arg0: K, arg1: boolean): boolean;
    remove<V extends Object | number | string | boolean>(arg0: Object): V;
    remove(arg0: Object): boolean;
    removeBoolean(arg0: Object): boolean;
    size(): number;
    test(arg0: K): boolean;
}