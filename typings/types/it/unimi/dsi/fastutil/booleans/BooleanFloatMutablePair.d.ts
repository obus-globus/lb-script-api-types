import type { BooleanFloatPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanFloatMutablePair extends Object implements BooleanFloatPair, Serializable {
    static lexComparator(): (param0: BooleanFloatPair) => kotlin.Boolean;
    static of(paramarg0: boolean, paramarg1: number): BooleanFloatMutablePair;
    static of(paramarg0: boolean, paramarg1: number): BooleanFloatPair;
    constructor(arg0: boolean, arg1: number)
    // private left: boolean;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanFloatPair;
    first(arg0: boolean): BooleanFloatPair;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanFloatPair;
    key(arg0: boolean): BooleanFloatPair;
    keyBoolean(): boolean;
    left(): boolean;
    left(arg0: boolean): BooleanFloatPair;
    left(arg0: boolean): BooleanFloatMutablePair;
    left(): boolean;
    left(arg0: boolean): BooleanFloatPair;
    left(arg0: boolean): BooleanFloatPair;
    leftBoolean(): boolean;
    right(): number;
    right(arg0: number): BooleanFloatPair;
    right(arg0: number): BooleanFloatMutablePair;
    right(): number;
    right(arg0: number): BooleanFloatPair;
    right(arg0: number): BooleanFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): BooleanFloatPair;
    second(arg0: number): BooleanFloatPair;
    secondFloat(): number;
    toString(): string;
    value(): number;
    value(arg0: number): BooleanFloatPair;
    value(arg0: number): BooleanFloatPair;
    valueFloat(): number;
}