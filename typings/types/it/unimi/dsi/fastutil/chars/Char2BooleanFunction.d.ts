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
import type { Byte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharFunction.d.ts'
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
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Char2BooleanFunction extends Function<string, boolean>, IntPredicate, Object {
    and(arg0: (param0: number) => boolean): (param0: number) => boolean;
    andThen<T extends unknown>(arg0: (param0: boolean) => T): (param0: string) => T;
    andThenByte(arg0: (param0: boolean) => number): (param0: string) => number;
    andThenChar(arg0: (param0: boolean) => string): (param0: string) => string;
    andThenDouble(arg0: (param0: boolean) => number): (param0: string) => number;
    andThenFloat(arg0: (param0: boolean) => number): (param0: string) => number;
    andThenInt(arg0: (param0: boolean) => number): (param0: string) => number;
    andThenLong(arg0: (param0: boolean) => number): (param0: string) => number;
    andThenObject<T extends unknown>(arg0: (param0: boolean) => T): (param0: string) => T;
    andThenReference<T extends unknown>(arg0: (param0: boolean) => T): (param0: string) => T;
    andThenShort(arg0: (param0: boolean) => number): (param0: string) => number;
    apply(arg0: string): boolean;
    clear(): void;
    compose<T extends unknown>(arg0: (param0: T) => string): (param0: T) => boolean;
    composeByte(arg0: (param0: number) => string): (param0: number) => boolean;
    composeChar(arg0: (param0: string) => string): (param0: string) => boolean;
    composeDouble(arg0: (param0: number) => string): (param0: number) => boolean;
    composeFloat(arg0: (param0: number) => string): (param0: number) => boolean;
    composeInt(arg0: (param0: number) => string): (param0: number) => boolean;
    composeLong(arg0: (param0: number) => string): (param0: number) => boolean;
    composeObject<T extends unknown>(arg0: (param0: Object) => string): (param0: Object) => boolean;
    composeReference<T extends unknown>(arg0: (param0: Object) => string): (param0: Object) => boolean;
    composeShort(arg0: (param0: number) => string): (param0: number) => boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    get(arg0: Object): boolean;
    get(arg0: string): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    getOrDefault(arg0: string, arg1: boolean): boolean;
    negate(): (param0: number) => boolean;
    or(arg0: (param0: number) => boolean): (param0: number) => boolean;
    put(arg0: string, arg1: boolean): boolean;
    remove(arg0: Object): boolean;
    remove(arg0: string): boolean;
    size(): number;
    test(arg0: number): boolean;
}