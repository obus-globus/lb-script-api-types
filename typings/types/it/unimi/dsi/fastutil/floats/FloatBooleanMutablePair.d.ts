import type { FloatBooleanPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatBooleanMutablePair extends Object implements FloatBooleanPair, Serializable {
    static lexComparator(): (param0: FloatBooleanPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: boolean): FloatBooleanMutablePair;
    static of(paramarg0: number, paramarg1: boolean): FloatBooleanPair;
    constructor(arg0: number, arg1: boolean)
    // private left: number;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatBooleanPair;
    first(arg0: number): FloatBooleanPair;
    firstFloat(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatBooleanPair;
    key(arg0: number): FloatBooleanPair;
    keyFloat(): number;
    left(arg0: number): FloatBooleanMutablePair;
    left(): number;
    left(arg0: number): FloatBooleanPair;
    left(arg0: number): FloatBooleanPair;
    leftFloat(): number;
    right(arg0: boolean): FloatBooleanMutablePair;
    right(): boolean;
    right(arg0: boolean): FloatBooleanPair;
    right(arg0: boolean): FloatBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): FloatBooleanPair;
    second(arg0: boolean): FloatBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): FloatBooleanPair;
    value(arg0: boolean): FloatBooleanPair;
    valueBoolean(): boolean;
}