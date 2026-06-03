import type { ShortBooleanPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortBooleanMutablePair extends Object implements ShortBooleanPair, Serializable {
    static lexComparator(): (param0: ShortBooleanPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: boolean): ShortBooleanMutablePair;
    static of(paramarg0: number, paramarg1: boolean): ShortBooleanPair;
    constructor(arg0: number, arg1: boolean)
    // private left: number;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortBooleanPair;
    first(arg0: number): ShortBooleanPair;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortBooleanPair;
    key(arg0: number): ShortBooleanPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortBooleanPair;
    left(arg0: number): ShortBooleanMutablePair;
    left(): number;
    left(arg0: number): ShortBooleanPair;
    left(arg0: number): ShortBooleanPair;
    leftShort(): number;
    right(): boolean;
    right(arg0: boolean): ShortBooleanPair;
    right(arg0: boolean): ShortBooleanMutablePair;
    right(): boolean;
    right(arg0: boolean): ShortBooleanPair;
    right(arg0: boolean): ShortBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): ShortBooleanPair;
    second(arg0: boolean): ShortBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): ShortBooleanPair;
    value(arg0: boolean): ShortBooleanPair;
    valueBoolean(): boolean;
}