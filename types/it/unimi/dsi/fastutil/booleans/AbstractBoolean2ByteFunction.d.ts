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
import type { Byte2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteFunction.d.ts'
import type { Byte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharFunction.d.ts'
import type { Byte2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleFunction.d.ts'
import type { Byte2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatFunction.d.ts'
import type { Byte2IntFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntFunction.d.ts'
import type { Byte2LongFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongFunction.d.ts'
import type { Byte2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectFunction.d.ts'
import type { Byte2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceFunction.d.ts'
import type { Byte2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortFunction.d.ts'
import type { Char2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanFunction.d.ts'
import type { Char2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteFunction.d.ts'
import type { Double2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanFunction.d.ts'
import type { Double2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteFunction.d.ts'
import type { Float2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanFunction.d.ts'
import type { Float2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteFunction.d.ts'
import type { Int2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanFunction.d.ts'
import type { Int2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteFunction.d.ts'
import type { Long2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanFunction.d.ts'
import type { Long2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteFunction.d.ts'
import type { Object2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanFunction.d.ts'
import type { Object2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteFunction.d.ts'
import type { Reference2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanFunction.d.ts'
import type { Reference2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteFunction.d.ts'
import type { Short2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanFunction.d.ts'
import type { Short2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractBoolean2ByteFunction extends Object implements Boolean2ByteFunction, Serializable {
    constructor()
    // private defRetValue: number;
    andThen(arg0: (param0: number) => T): (param0: boolean) => T;
    andThenByte(arg0: (param0: number) => kotlin.Byte): (param0: boolean) => kotlin.Byte;
    andThenChar(arg0: (param0: number) => kotlin.Char): (param0: boolean) => kotlin.Char;
    andThenDouble(arg0: (param0: number) => kotlin.Double): (param0: boolean) => kotlin.Double;
    andThenFloat(arg0: (param0: number) => kotlin.Float): (param0: boolean) => kotlin.Float;
    andThenInt(arg0: (param0: number) => kotlin.Int): (param0: boolean) => kotlin.Int;
    andThenLong(arg0: (param0: number) => kotlin.Long): (param0: boolean) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenReference(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenShort(arg0: (param0: number) => kotlin.Short): (param0: boolean) => kotlin.Short;
    compose(arg0: (param0: T) => boolean): (param0: T) => number;
    composeByte(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Byte;
    composeChar(arg0: (param0: string) => kotlin.Boolean): (param0: string) => kotlin.Byte;
    composeDouble(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Byte;
    composeFloat(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Byte;
    composeInt(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Byte;
    composeLong(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Byte;
    composeObject(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Byte;
    composeReference(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Byte;
    composeShort(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Byte;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: boolean): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    get(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: boolean, arg1: number): number;
    put(arg0: boolean, arg1: number): number;
    put(arg0: boolean, arg1: number): number;
    remove(arg0: Object): number;
    remove(arg0: boolean): number;
}