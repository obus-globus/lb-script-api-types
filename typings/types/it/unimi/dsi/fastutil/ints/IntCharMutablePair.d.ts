import type { IntCharPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntCharMutablePair extends Object implements IntCharPair, Serializable {
    static of(paramarg0: number, paramarg1: string): IntCharMutablePair;
    constructor(arg0: number, arg1: string)
    // private left: number;
    // private right: string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntCharPair;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntCharPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntCharPair;
    left(arg0: number): IntCharMutablePair;
    leftInt(): number;
    right(): string;
    right(arg0: string): IntCharPair;
    right(arg0: string): IntCharMutablePair;
    rightChar(): string;
    second(): string;
    second(arg0: string): IntCharPair;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): IntCharPair;
    valueChar(): string;
}