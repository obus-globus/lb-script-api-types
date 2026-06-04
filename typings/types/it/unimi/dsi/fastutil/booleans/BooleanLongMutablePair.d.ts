import type { BooleanLongPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanLongMutablePair extends Object implements BooleanLongPair, Serializable {
    static lexComparator(): (param0: BooleanLongPair) => kotlin.Boolean;
    static of(paramarg0: boolean, paramarg1: number): BooleanLongMutablePair;
    static of(paramarg0: boolean, paramarg1: number): BooleanLongPair;
    constructor(arg0: boolean, arg1: number)
    // private left: boolean;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanLongPair;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanLongPair;
    keyBoolean(): boolean;
    left(): boolean;
    left(arg0: boolean): BooleanLongPair;
    left(arg0: boolean): BooleanLongMutablePair;
    leftBoolean(): boolean;
    right(): number;
    right(arg0: number): BooleanLongPair;
    right(arg0: number): BooleanLongMutablePair;
    rightLong(): number;
    second(): number;
    second(arg0: number): BooleanLongPair;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): BooleanLongPair;
    valueLong(): number;
}