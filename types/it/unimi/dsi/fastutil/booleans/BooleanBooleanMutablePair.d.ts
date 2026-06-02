import type { BooleanBooleanPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanBooleanMutablePair extends Object implements BooleanBooleanPair, Serializable {
    static lexComparator(): (param0: BooleanBooleanPair) => kotlin.Boolean;
    static of(paramarg0: boolean, paramarg1: boolean): BooleanBooleanMutablePair;
    static of(paramarg0: boolean, paramarg1: boolean): BooleanBooleanPair;
    constructor(arg0: boolean, arg1: boolean)
    // private left: boolean;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanBooleanPair;
    first(arg0: boolean): BooleanBooleanPair;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanBooleanPair;
    key(arg0: boolean): BooleanBooleanPair;
    keyBoolean(): boolean;
    left(arg0: boolean): BooleanBooleanMutablePair;
    left(): boolean;
    left(arg0: boolean): BooleanBooleanPair;
    left(arg0: boolean): BooleanBooleanPair;
    leftBoolean(): boolean;
    right(arg0: boolean): BooleanBooleanMutablePair;
    right(): boolean;
    right(arg0: boolean): BooleanBooleanPair;
    right(arg0: boolean): BooleanBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): BooleanBooleanPair;
    second(arg0: boolean): BooleanBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): BooleanBooleanPair;
    value(arg0: boolean): BooleanBooleanPair;
    valueBoolean(): boolean;
}