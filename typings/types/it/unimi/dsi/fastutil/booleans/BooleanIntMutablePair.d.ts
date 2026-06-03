import type { BooleanIntPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIntPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanIntMutablePair extends Object implements BooleanIntPair, Serializable {
    static lexComparator(): (param0: BooleanIntPair) => kotlin.Boolean;
    static of(paramarg0: boolean, paramarg1: number): BooleanIntMutablePair;
    static of(paramarg0: boolean, paramarg1: number): BooleanIntPair;
    constructor(arg0: boolean, arg1: number)
    // private left: boolean;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanIntPair;
    first(arg0: boolean): BooleanIntPair;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanIntPair;
    key(arg0: boolean): BooleanIntPair;
    keyBoolean(): boolean;
    left(): boolean;
    left(arg0: boolean): BooleanIntPair;
    left(arg0: boolean): BooleanIntMutablePair;
    left(): boolean;
    left(arg0: boolean): BooleanIntPair;
    left(arg0: boolean): BooleanIntPair;
    leftBoolean(): boolean;
    right(): number;
    right(arg0: number): BooleanIntPair;
    right(arg0: number): BooleanIntMutablePair;
    right(): number;
    right(arg0: number): BooleanIntPair;
    right(arg0: number): BooleanIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): BooleanIntPair;
    second(arg0: number): BooleanIntPair;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): BooleanIntPair;
    value(arg0: number): BooleanIntPair;
    valueInt(): number;
}