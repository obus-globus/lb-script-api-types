import type { CharBooleanPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharBooleanImmutablePair extends Object implements CharBooleanPair, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: string, paramarg1: boolean): CharBooleanImmutablePair;
    static of(paramarg0: string, paramarg1: boolean): CharBooleanPair;
    constructor(arg0: string, arg1: boolean)
    // private left: string;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharBooleanPair;
    firstChar(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharBooleanPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharBooleanPair;
    leftChar(): string;
    right(): boolean;
    right(arg0: boolean): CharBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): CharBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): CharBooleanPair;
    valueBoolean(): boolean;
}