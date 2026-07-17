import type { DoubleBooleanPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleBooleanImmutablePair extends Object implements DoubleBooleanPair, Serializable {
    static of(paramarg0: number, paramarg1: boolean): DoubleBooleanImmutablePair;
    constructor(arg0: number, arg1: boolean)
    // private left: number;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleBooleanPair;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleBooleanPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleBooleanPair;
    leftDouble(): number;
    right(): boolean;
    right(arg0: boolean): DoubleBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): DoubleBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): DoubleBooleanPair;
    valueBoolean(): boolean;
}