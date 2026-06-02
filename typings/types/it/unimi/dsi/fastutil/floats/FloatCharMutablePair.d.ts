import type { FloatCharPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatCharMutablePair extends Object implements FloatCharPair, Serializable {
    static lexComparator(): (param0: FloatCharPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: string): FloatCharMutablePair;
    static of(paramarg0: number, paramarg1: string): FloatCharPair;
    constructor(arg0: number, arg1: string)
    // private left: number;
    // private right: string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatCharPair;
    first(arg0: number): FloatCharPair;
    firstFloat(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatCharPair;
    key(arg0: number): FloatCharPair;
    keyFloat(): number;
    left(arg0: number): FloatCharMutablePair;
    left(): number;
    left(arg0: number): FloatCharPair;
    left(arg0: number): FloatCharPair;
    leftFloat(): number;
    right(arg0: string): FloatCharMutablePair;
    right(): string;
    right(arg0: string): FloatCharPair;
    right(arg0: string): FloatCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): FloatCharPair;
    second(arg0: string): FloatCharPair;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): FloatCharPair;
    value(arg0: string): FloatCharPair;
    valueChar(): string;
}