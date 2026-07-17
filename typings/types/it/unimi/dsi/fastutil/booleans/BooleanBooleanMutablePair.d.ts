import type { BooleanBooleanPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanBooleanMutablePair extends Object implements BooleanBooleanPair, Serializable {
    static of(paramarg0: boolean, paramarg1: boolean): BooleanBooleanMutablePair;
    constructor(arg0: boolean, arg1: boolean)
    // private left: boolean;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanBooleanPair;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanBooleanPair;
    keyBoolean(): boolean;
    left(): boolean;
    left(arg0: boolean): BooleanBooleanPair;
    left(arg0: boolean): BooleanBooleanMutablePair;
    leftBoolean(): boolean;
    right(): boolean;
    right(arg0: boolean): BooleanBooleanPair;
    right(arg0: boolean): BooleanBooleanMutablePair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): BooleanBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): BooleanBooleanPair;
    valueBoolean(): boolean;
}