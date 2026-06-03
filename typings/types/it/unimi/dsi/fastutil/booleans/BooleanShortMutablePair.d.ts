import type { BooleanShortPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanShortMutablePair extends Object implements BooleanShortPair, Serializable {
    static lexComparator(): (param0: BooleanShortPair) => kotlin.Boolean;
    static of(paramarg0: boolean, paramarg1: number): BooleanShortMutablePair;
    static of(paramarg0: boolean, paramarg1: number): BooleanShortPair;
    constructor(arg0: boolean, arg1: number)
    // private left: boolean;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanShortPair;
    first(arg0: boolean): BooleanShortPair;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanShortPair;
    key(arg0: boolean): BooleanShortPair;
    keyBoolean(): boolean;
    left(): boolean;
    left(arg0: boolean): BooleanShortPair;
    left(arg0: boolean): BooleanShortMutablePair;
    left(): boolean;
    left(arg0: boolean): BooleanShortPair;
    left(arg0: boolean): BooleanShortPair;
    leftBoolean(): boolean;
    right(): number;
    right(arg0: number): BooleanShortPair;
    right(arg0: number): BooleanShortMutablePair;
    right(): number;
    right(arg0: number): BooleanShortPair;
    right(arg0: number): BooleanShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): BooleanShortPair;
    second(arg0: number): BooleanShortPair;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): BooleanShortPair;
    value(arg0: number): BooleanShortPair;
    valueShort(): number;
}