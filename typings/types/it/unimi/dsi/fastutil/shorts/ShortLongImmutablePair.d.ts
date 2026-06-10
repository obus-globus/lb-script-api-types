import type { ShortLongPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortLongImmutablePair extends Object implements ShortLongPair, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: number): ShortLongImmutablePair;
    static of(paramarg0: number, paramarg1: number): ShortLongPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortLongPair;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortLongPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortLongPair;
    leftShort(): number;
    right(): number;
    right(arg0: number): ShortLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): ShortLongPair;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortLongPair;
    valueLong(): number;
}