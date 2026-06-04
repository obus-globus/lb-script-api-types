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
import type { Double2CharFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharFunction.d.ts'
import type { Float2CharFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharFunction.d.ts'
import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Long2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharFunction.d.ts'
import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Short2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractChar2CharFunction extends Object implements Char2CharFunction, Serializable {
    static identity(): (param0: string) => kotlin.Char;
    constructor()
    // private defRetValue: string;
    andThen(arg0: (param0: string) => T): (param0: string) => T;
    andThenByte(arg0: (param0: string) => kotlin.Byte): (param0: string) => kotlin.Byte;
    andThenChar(arg0: (param0: string) => kotlin.Char): (param0: string) => kotlin.Char;
    andThenDouble(arg0: (param0: string) => kotlin.Double): (param0: string) => kotlin.Double;
    andThenFloat(arg0: (param0: string) => kotlin.Float): (param0: string) => kotlin.Float;
    andThenInt(arg0: (param0: string) => kotlin.Int): (param0: string) => kotlin.Int;
    andThenLong(arg0: (param0: string) => kotlin.Long): (param0: string) => kotlin.Long;
    andThenObject(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenReference(arg0: (param0: T) => unknown): (param0: T) => unknown;
    andThenShort(arg0: (param0: string) => kotlin.Short): (param0: string) => kotlin.Short;
    applyAsInt(arg0: number): number;
    compose(arg0: (param0: T) => string): (param0: T) => string;
    composeByte(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Char;
    composeChar(arg0: (param0: string) => kotlin.Char): (param0: string) => kotlin.Char;
    composeDouble(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Char;
    composeFloat(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Char;
    composeInt(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Char;
    composeLong(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Char;
    composeObject(arg0: (param0: T) => kotlin.Char): (param0: T) => kotlin.Char;
    composeReference(arg0: (param0: T) => kotlin.Char): (param0: T) => kotlin.Char;
    composeShort(arg0: (param0: number) => kotlin.Char): (param0: number) => kotlin.Char;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    get(arg0: Object): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: string, arg1: string): string;
    put(arg0: string, arg1: string): string;
    remove(arg0: Object): string;
    remove(arg0: string): string;
}