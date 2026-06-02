import type { SortedPair } from '../../../../../it/unimi/dsi/fastutil/SortedPair.d.ts'
import type { ShortShortPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortShortSortedPair extends SortedPair<number>, ShortShortPair, Serializable, Object{
    contains(arg0: Object): boolean;
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    first(): number;
    first(arg0: number): ShortShortPair;
    first(arg0: number): ShortShortPair;
    firstShort(): number;
    key(): number;
    key(arg0: number): ShortShortPair;
    key(arg0: number): ShortShortPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortShortPair;
    left(arg0: number): ShortShortPair;
    right(): number;
    right(arg0: number): ShortShortPair;
    right(arg0: number): ShortShortPair;
    second(): number;
    second(arg0: number): ShortShortPair;
    second(arg0: number): ShortShortPair;
    secondShort(): number;
    value(): number;
    value(arg0: number): ShortShortPair;
    value(arg0: number): ShortShortPair;
    valueShort(): number;
}