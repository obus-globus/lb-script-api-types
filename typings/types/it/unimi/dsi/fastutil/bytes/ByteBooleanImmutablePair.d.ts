import type { ByteBooleanPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteBooleanImmutablePair extends Object implements ByteBooleanPair, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: boolean): ByteBooleanImmutablePair;
    static of(paramarg0: number, paramarg1: boolean): ByteBooleanPair;
    constructor(arg0: number, arg1: boolean)
    // private left: number;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteBooleanPair;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteBooleanPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteBooleanPair;
    leftByte(): number;
    right(): boolean;
    right(arg0: boolean): ByteBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): ByteBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): ByteBooleanPair;
    valueBoolean(): boolean;
}