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
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanFunctions$SynchronizedFunction extends Object implements Char2BooleanFunction, Serializable {
    constructor(arg0: (param0: string) => kotlin.Boolean)
    constructor(arg0: (param0: string) => kotlin.Boolean, arg1: Object)
    // private function: (param0: string) => kotlin.Boolean;
    // private sync: Object;
    andThen(arg0: (param0: boolean) => T): (param0: string) => T;
    andThenByte(arg0: (param0: boolean) => kotlin.Byte): (param0: string) => kotlin.Byte;
    andThenChar(arg0: (param0: boolean) => kotlin.Char): (param0: string) => kotlin.Char;
    andThenDouble(arg0: (param0: boolean) => kotlin.Double): (param0: string) => kotlin.Double;
    andThenFloat(arg0: (param0: boolean) => kotlin.Float): (param0: string) => kotlin.Float;
    andThenInt(arg0: (param0: boolean) => kotlin.Int): (param0: string) => kotlin.Int;
    andThenLong(arg0: (param0: boolean) => kotlin.Long): (param0: string) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenReference(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenShort(arg0: (param0: boolean) => kotlin.Short): (param0: string) => kotlin.Short;
    apply(arg0: string): boolean;
    clear(): void;
    compose(arg0: (param0: T) => string): (param0: T) => boolean;
    composeByte(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Boolean;
    composeChar(arg0: (param0: string) => kotlin.Char): (param0: string) => kotlin.Boolean;
    composeDouble(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Boolean;
    composeFloat(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Boolean;
    composeInt(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Boolean;
    composeLong(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Boolean;
    composeObject(arg0: (param0: T) => kotlin.Char): (param0: T) => kotlin.Boolean;
    composeReference(arg0: (param0: T) => kotlin.Char): (param0: T) => kotlin.Boolean;
    composeShort(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): boolean;
    get(arg0: Object): boolean;
    get(arg0: string): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    getOrDefault(arg0: string, arg1: boolean): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    getOrDefault(arg0: string, arg1: boolean): boolean;
    hashCode(): number;
    put(arg0: string, arg1: boolean): boolean;
    put(arg0: string, arg1: boolean): boolean;
    put(arg0: string, arg1: boolean): boolean;
    put(arg0: string, arg1: boolean): boolean;
    remove(arg0: Object): boolean;
    remove(arg0: string): boolean;
    remove(arg0: Object): boolean;
    remove(arg0: string): boolean;
    size(): number;
    test(arg0: number): boolean;
    test(arg0: number): boolean;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}