import type { IntBooleanPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntBooleanMutablePair extends Object implements IntBooleanPair, Serializable {
    static of(paramarg0: number, paramarg1: boolean): IntBooleanMutablePair;
    constructor(arg0: number, arg1: boolean)
    // private left: number;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntBooleanPair;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntBooleanPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntBooleanPair;
    left(arg0: number): IntBooleanMutablePair;
    leftInt(): number;
    right(): boolean;
    right(arg0: boolean): IntBooleanPair;
    right(arg0: boolean): IntBooleanMutablePair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): IntBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): IntBooleanPair;
    valueBoolean(): boolean;
}