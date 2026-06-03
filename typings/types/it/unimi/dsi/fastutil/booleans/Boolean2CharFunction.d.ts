import type { Function } from '../../../../../it/unimi/dsi/fastutil/Function.d.ts'
import type { Boolean2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2ByteFunction.d.ts'
import type { Boolean2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2DoubleFunction.d.ts'
import type { Boolean2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2FloatFunction.d.ts'
import type { Boolean2IntFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2IntFunction.d.ts'
import type { Boolean2LongFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2LongFunction.d.ts'
import type { Boolean2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2ObjectFunction.d.ts'
import type { Boolean2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2ReferenceFunction.d.ts'
import type { Boolean2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2ShortFunction.d.ts'
import type { Byte2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanFunction.d.ts'
import type { Byte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharFunction.d.ts'
import type { Char2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanFunction.d.ts'
import type { Char2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteFunction.d.ts'
import type { Char2CharFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharFunction.d.ts'
import type { Char2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleFunction.d.ts'
import type { Char2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatFunction.d.ts'
import type { Char2IntFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntFunction.d.ts'
import type { Char2LongFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongFunction.d.ts'
import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { Char2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunction.d.ts'
import type { Char2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortFunction.d.ts'
import type { Double2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanFunction.d.ts'
import type { Double2CharFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharFunction.d.ts'
import type { Float2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanFunction.d.ts'
import type { Float2CharFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharFunction.d.ts'
import type { Int2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanFunction.d.ts'
import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Long2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanFunction.d.ts'
import type { Long2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharFunction.d.ts'
import type { Object2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanFunction.d.ts'
import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
import type { Reference2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanFunction.d.ts'
import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Short2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanFunction.d.ts'
import type { Short2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharFunction.d.ts'
import type { Function as Function_2 } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Boolean2CharFunction extends Function<boolean, string>, Object{
    andThen(arg0: (param0: string) => T): (param0: boolean) => T;
    andThenByte(arg0: (param0: string) => kotlin.Byte): (param0: boolean) => kotlin.Byte;
    andThenChar(arg0: (param0: string) => kotlin.Char): (param0: boolean) => kotlin.Char;
    andThenDouble(arg0: (param0: string) => kotlin.Double): (param0: boolean) => kotlin.Double;
    andThenFloat(arg0: (param0: string) => kotlin.Float): (param0: boolean) => kotlin.Float;
    andThenInt(arg0: (param0: string) => kotlin.Int): (param0: boolean) => kotlin.Int;
    andThenLong(arg0: (param0: string) => kotlin.Long): (param0: boolean) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenReference(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenShort(arg0: (param0: string) => kotlin.Short): (param0: boolean) => kotlin.Short;
    apply<V extends Object | number | string | boolean, K extends Object | number | string | boolean>(arg0: K): V;
    clear(): void;
    compose(arg0: (param0: T) => boolean): (param0: T) => string;
    composeByte(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Char;
    composeChar(arg0: (param0: string) => kotlin.Boolean): (param0: string) => kotlin.Char;
    composeDouble(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Char;
    composeFloat(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Char;
    composeInt(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Char;
    composeLong(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Char;
    composeObject(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Char;
    composeReference(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Char;
    composeShort(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Char;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: boolean): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    get(arg0: Object): string;
    get(arg0: boolean): string;
    getOrDefault<V extends Object | number | string | boolean>(arg0: Object, arg1: V): V;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: boolean, arg1: string): string;
    put<V extends Object | number | string | boolean, K extends Object | number | string | boolean>(arg0: K, arg1: V): V;
    put(arg0: boolean, arg1: string): string;
    put(arg0: boolean, arg1: string): string;
    remove<V extends Object | number | string | boolean>(arg0: Object): V;
    remove(arg0: Object): string;
    remove(arg0: boolean): string;
    size(): number;
}