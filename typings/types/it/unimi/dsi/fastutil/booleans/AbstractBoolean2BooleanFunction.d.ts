import type { Boolean2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/booleans/Boolean2BooleanFunction.d.ts'
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
import type { Char2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanFunction.d.ts'
import type { Double2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanFunction.d.ts'
import type { Float2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanFunction.d.ts'
import type { Int2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanFunction.d.ts'
import type { Long2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanFunction.d.ts'
import type { Object2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanFunction.d.ts'
import type { Reference2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanFunction.d.ts'
import type { Short2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractBoolean2BooleanFunction extends Object implements Boolean2BooleanFunction, Serializable {
    static identity(): (param0: boolean) => boolean;
    constructor()
    // private defRetValue: boolean;
    andThen<T extends unknown>(arg0: (param0: boolean) => T): (param0: boolean) => T;
    andThenByte(arg0: (param0: boolean) => number): (param0: boolean) => number;
    andThenChar(arg0: (param0: boolean) => string): (param0: boolean) => string;
    andThenDouble(arg0: (param0: boolean) => number): (param0: boolean) => number;
    andThenFloat(arg0: (param0: boolean) => number): (param0: boolean) => number;
    andThenInt(arg0: (param0: boolean) => number): (param0: boolean) => number;
    andThenLong(arg0: (param0: boolean) => number): (param0: boolean) => number;
    andThenObject<T extends unknown>(arg0: (param0: boolean) => T): (param0: boolean) => T;
    andThenReference<T extends unknown>(arg0: (param0: boolean) => T): (param0: boolean) => T;
    andThenShort(arg0: (param0: boolean) => number): (param0: boolean) => number;
    compose<T extends unknown>(arg0: (param0: T) => boolean): (param0: T) => boolean;
    composeByte(arg0: (param0: number) => boolean): (param0: number) => boolean;
    composeChar(arg0: (param0: string) => boolean): (param0: string) => boolean;
    composeDouble(arg0: (param0: number) => boolean): (param0: number) => boolean;
    composeFloat(arg0: (param0: number) => boolean): (param0: number) => boolean;
    composeInt(arg0: (param0: number) => boolean): (param0: number) => boolean;
    composeLong(arg0: (param0: number) => boolean): (param0: number) => boolean;
    composeObject<T extends unknown>(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    composeReference<T extends unknown>(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    composeShort(arg0: (param0: number) => boolean): (param0: number) => boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: boolean): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    get(arg0: Object): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    getOrDefault(arg0: boolean, arg1: boolean): boolean;
    put(arg0: boolean, arg1: boolean): boolean;
    remove(arg0: Object): boolean;
    remove(arg0: boolean): boolean;
}