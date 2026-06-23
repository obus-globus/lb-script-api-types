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
export interface Boolean2CharFunction extends Function<boolean, string>, Object {
    andThen<T extends unknown>(arg0: (param0: string) => T): (param0: boolean) => T;
    andThenByte(arg0: (param0: string) => number): (param0: boolean) => number;
    andThenChar(arg0: (param0: string) => string): (param0: boolean) => string;
    andThenDouble(arg0: (param0: string) => number): (param0: boolean) => number;
    andThenFloat(arg0: (param0: string) => number): (param0: boolean) => number;
    andThenInt(arg0: (param0: string) => number): (param0: boolean) => number;
    andThenLong(arg0: (param0: string) => number): (param0: boolean) => number;
    andThenObject<T extends unknown>(arg0: (param0: string) => T): (param0: boolean) => T;
    andThenReference<T extends unknown>(arg0: (param0: string) => T): (param0: boolean) => T;
    andThenShort(arg0: (param0: string) => number): (param0: boolean) => number;
    apply(arg0: boolean): string;
    clear(): void;
    compose<T extends unknown>(arg0: (param0: T) => boolean): (param0: T) => string;
    composeByte(arg0: (param0: number) => boolean): (param0: number) => string;
    composeChar(arg0: (param0: string) => boolean): (param0: string) => string;
    composeDouble(arg0: (param0: number) => boolean): (param0: number) => string;
    composeFloat(arg0: (param0: number) => boolean): (param0: number) => string;
    composeInt(arg0: (param0: number) => boolean): (param0: number) => string;
    composeLong(arg0: (param0: number) => boolean): (param0: number) => string;
    composeObject<T extends unknown>(arg0: (param0: Object) => boolean): (param0: Object) => string;
    composeReference<T extends unknown>(arg0: (param0: Object) => boolean): (param0: Object) => string;
    composeShort(arg0: (param0: number) => boolean): (param0: number) => string;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: boolean): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    get(arg0: Object): string;
    get(arg0: boolean): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: boolean, arg1: string): string;
    put(arg0: boolean, arg1: string): string;
    remove(arg0: Object): string;
    remove(arg0: boolean): string;
    size(): number;
}