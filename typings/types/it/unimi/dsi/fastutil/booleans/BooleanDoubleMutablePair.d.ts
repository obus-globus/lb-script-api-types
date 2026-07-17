import type { BooleanDoublePair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanDoubleMutablePair extends Object implements BooleanDoublePair, Serializable {
    static of(paramarg0: boolean, paramarg1: number): BooleanDoubleMutablePair;
    constructor(arg0: boolean, arg1: number)
    // private left: boolean;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanDoublePair;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanDoublePair;
    keyBoolean(): boolean;
    left(): boolean;
    left(arg0: boolean): BooleanDoublePair;
    left(arg0: boolean): BooleanDoubleMutablePair;
    leftBoolean(): boolean;
    right(): number;
    right(arg0: number): BooleanDoublePair;
    right(arg0: number): BooleanDoubleMutablePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): BooleanDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): BooleanDoublePair;
    valueDouble(): number;
}