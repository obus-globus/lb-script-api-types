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
import type { Byte2LongFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongFunction.d.ts'
import type { Char2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanFunction.d.ts'
import type { Char2LongFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongFunction.d.ts'
import type { Double2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanFunction.d.ts'
import type { Double2LongFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongFunction.d.ts'
import type { Float2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanFunction.d.ts'
import type { Float2LongFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongFunction.d.ts'
import type { Int2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanFunction.d.ts'
import type { Int2LongFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongFunction.d.ts'
import type { Long2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanFunction.d.ts'
import type { Long2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteFunction.d.ts'
import type { Long2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharFunction.d.ts'
import type { Long2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleFunction.d.ts'
import type { Long2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatFunction.d.ts'
import type { Long2IntFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntFunction.d.ts'
import type { Long2LongFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongFunction.d.ts'
import type { Long2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectFunction.d.ts'
import type { Long2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceFunction.d.ts'
import type { Long2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortFunction.d.ts'
import type { Object2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanFunction.d.ts'
import type { Object2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongFunction.d.ts'
import type { Reference2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanFunction.d.ts'
import type { Reference2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongFunction.d.ts'
import type { Short2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanFunction.d.ts'
import type { Short2LongFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2BooleanFunctions$PrimitiveFunction extends Object implements Long2BooleanFunction {
    constructor(arg0: (param0: number) => boolean)
    // private function: (param0: number) => boolean;
    andThen(arg0: (param0: boolean) => T): (param0: number) => T;
    andThenByte(arg0: (param0: boolean) => kotlin.Byte): (param0: number) => kotlin.Byte;
    andThenChar(arg0: (param0: boolean) => kotlin.Char): (param0: number) => kotlin.Char;
    andThenDouble(arg0: (param0: boolean) => kotlin.Double): (param0: number) => kotlin.Double;
    andThenFloat(arg0: (param0: boolean) => kotlin.Float): (param0: number) => kotlin.Float;
    andThenInt(arg0: (param0: boolean) => kotlin.Int): (param0: number) => kotlin.Int;
    andThenLong(arg0: (param0: boolean) => kotlin.Long): (param0: number) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenReference(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenShort(arg0: (param0: boolean) => kotlin.Short): (param0: number) => kotlin.Short;
    compose(arg0: (param0: T) => number): (param0: T) => boolean;
    composeByte(arg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Boolean;
    composeChar(arg0: (param0: string) => kotlin.Long): (param0: string) => kotlin.Boolean;
    composeDouble(arg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Boolean;
    composeFloat(arg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Boolean;
    composeInt(arg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Boolean;
    composeLong(arg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Boolean;
    composeObject(arg0: (param0: T) => kotlin.Long): (param0: T) => kotlin.Boolean;
    composeReference(arg0: (param0: T) => kotlin.Long): (param0: T) => kotlin.Boolean;
    composeShort(arg0: (param0: number) => kotlin.Long): (param0: number) => kotlin.Boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    get(arg0: Object): boolean;
    get(arg0: Object): boolean;
    get(arg0: number): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    getOrDefault(arg0: number, arg1: boolean): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    getOrDefault(arg0: number, arg1: boolean): boolean;
    put(arg0: number, arg1: boolean): boolean;
    put(arg0: number, arg1: boolean): boolean;
    put(arg0: number, arg1: boolean): boolean;
    put(arg0: number, arg1: boolean): boolean;
    remove(arg0: Object): boolean;
    remove(arg0: number): boolean;
    test(arg0: number): boolean;
}