import type { Byte2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceFunction.d.ts'
import type { Char2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceFunction.d.ts'
import type { Double2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceFunction.d.ts'
import type { Float2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceFunction.d.ts'
import type { Int2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceFunction.d.ts'
import type { Long2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceFunction.d.ts'
import type { Object2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceFunction.d.ts'
import type { Reference2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteFunction.d.ts'
import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Reference2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleFunction.d.ts'
import type { Reference2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatFunction.d.ts'
import type { Reference2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntFunction.d.ts'
import type { Reference2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongFunction.d.ts'
import type { Reference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectFunction.d.ts'
import type { Reference2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceFunction.d.ts'
import type { Reference2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortFunction.d.ts'
import type { Short2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractReference2ReferenceFunction<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Reference2ReferenceFunction<K, V>, Serializable {
    constructor()
    // private defRetValue: V;
    andThenByte(arg0: (param0: Object) => number): (param0: Object) => number;
    andThenChar(arg0: (param0: Object) => string): (param0: Object) => string;
    andThenDouble(arg0: (param0: Object) => number): (param0: Object) => number;
    andThenFloat(arg0: (param0: Object) => number): (param0: Object) => number;
    andThenInt(arg0: (param0: Object) => number): (param0: Object) => number;
    andThenLong(arg0: (param0: Object) => number): (param0: Object) => number;
    andThenObject<T extends Object | number | string | boolean>(arg0: (param0: Object) => T): (param0: Object) => T;
    andThenReference<T extends Object | number | string | boolean>(arg0: (param0: Object) => T): (param0: Object) => T;
    andThenShort(arg0: (param0: Object) => number): (param0: Object) => number;
    composeByte(arg0: (param0: number) => K): (param0: number) => V;
    composeChar(arg0: (param0: string) => K): (param0: string) => V;
    composeDouble(arg0: (param0: number) => K): (param0: number) => V;
    composeFloat(arg0: (param0: number) => K): (param0: number) => V;
    composeInt(arg0: (param0: number) => K): (param0: number) => V;
    composeLong(arg0: (param0: number) => K): (param0: number) => V;
    composeObject<T extends Object | number | string | boolean>(arg0: (param0: Object) => K): (param0: Object) => V;
    composeReference<T extends Object | number | string | boolean>(arg0: (param0: Object) => K): (param0: Object) => V;
    composeShort(arg0: (param0: number) => K): (param0: number) => V;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    getOrDefault(arg0: Object, arg1: V): V;
    put(arg0: K, arg1: V): V;
    remove(arg0: Object): V;
}