import type { Byte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharFunction.d.ts'
import type { Byte2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectFunction.d.ts'
import type { Char2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteFunction.d.ts'
import type { Char2CharFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharFunction.d.ts'
import type { Char2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleFunction.d.ts'
import type { Char2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatFunction.d.ts'
import type { Char2IntFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntFunction.d.ts'
import type { Char2LongFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongFunction.d.ts'
import type { Char2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectFunction.d.ts'
import type { Char2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunction.d.ts'
import type { Char2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortFunction.d.ts'
import type { Double2CharFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharFunction.d.ts'
import type { Double2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectFunction.d.ts'
import type { Float2CharFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharFunction.d.ts'
import type { Float2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectFunction.d.ts'
import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Int2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectFunction.d.ts'
import type { Long2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharFunction.d.ts'
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
import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Reference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectFunction.d.ts'
import type { Short2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharFunction.d.ts'
import type { Short2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractObject2CharFunction<K extends Object | number | string | boolean> extends Object implements Object2CharFunction<K>, Serializable {
    constructor()
    // private defRetValue: string;
    andThen<T extends Object | number | string | boolean>(arg0: (param0: string) => T): (param0: K) => T;
    andThenByte(arg0: (param0: string) => number): (param0: Object) => number;
    andThenChar(arg0: (param0: string) => string): (param0: Object) => string;
    andThenDouble(arg0: (param0: string) => number): (param0: Object) => number;
    andThenFloat(arg0: (param0: string) => number): (param0: Object) => number;
    andThenInt(arg0: (param0: string) => number): (param0: Object) => number;
    andThenLong(arg0: (param0: string) => number): (param0: Object) => number;
    andThenObject<T extends Object | number | string | boolean>(arg0: (param0: string) => T): (param0: Object) => T;
    andThenReference<T extends Object | number | string | boolean>(arg0: (param0: string) => T): (param0: Object) => T;
    andThenShort(arg0: (param0: string) => number): (param0: Object) => number;
    applyAsInt(arg0: K): number;
    composeByte(arg0: (param0: number) => K): (param0: number) => string;
    composeChar(arg0: (param0: string) => K): (param0: string) => string;
    composeDouble(arg0: (param0: number) => K): (param0: number) => string;
    composeFloat(arg0: (param0: number) => K): (param0: number) => string;
    composeInt(arg0: (param0: number) => K): (param0: number) => string;
    composeLong(arg0: (param0: number) => K): (param0: number) => string;
    composeObject<T extends Object | number | string | boolean>(arg0: (param0: Object) => K): (param0: Object) => string;
    composeReference<T extends Object | number | string | boolean>(arg0: (param0: Object) => K): (param0: Object) => string;
    composeShort(arg0: (param0: number) => K): (param0: number) => string;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    get(arg0: Object): string;
    getOrDefault(arg0: Object, arg1: string): string;
    put(arg0: K, arg1: string): string;
    remove(arg0: Object): string;
    removeChar(arg0: Object): string;
}