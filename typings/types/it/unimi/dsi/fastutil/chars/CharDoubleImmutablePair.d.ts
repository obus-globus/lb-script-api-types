import type { CharDoublePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharDoubleImmutablePair extends Object implements CharDoublePair, Serializable {
    static lexComparator(): (param0: CharDoublePair) => kotlin.Boolean;
    static of(paramarg0: string, paramarg1: number): CharDoubleImmutablePair;
    static of(paramarg0: string, paramarg1: number): CharDoublePair;
    constructor(arg0: string, arg1: number)
    // private left: string;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharDoublePair;
    firstChar(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharDoublePair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharDoublePair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): CharDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharDoublePair;
    valueDouble(): number;
}