import type { IntBooleanPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntBooleanMutablePair extends Object implements IntBooleanPair, Serializable {
    static lexComparator(): (param0: IntBooleanPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: boolean): IntBooleanMutablePair;
    static of(paramarg0: number, paramarg1: boolean): IntBooleanPair;
    constructor(arg0: number, arg1: boolean)
    // private left: number;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntBooleanPair;
    first(arg0: number): IntBooleanPair;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntBooleanPair;
    key(arg0: number): IntBooleanPair;
    keyInt(): number;
    left(arg0: number): IntBooleanMutablePair;
    left(): number;
    left(arg0: number): IntBooleanPair;
    left(arg0: number): IntBooleanPair;
    leftInt(): number;
    right(arg0: boolean): IntBooleanMutablePair;
    right(): boolean;
    right(arg0: boolean): IntBooleanPair;
    right(arg0: boolean): IntBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): IntBooleanPair;
    second(arg0: boolean): IntBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): IntBooleanPair;
    value(arg0: boolean): IntBooleanPair;
    valueBoolean(): boolean;
}