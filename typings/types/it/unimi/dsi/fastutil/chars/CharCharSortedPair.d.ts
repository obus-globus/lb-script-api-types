import type { SortedPair } from '../../../../../it/unimi/dsi/fastutil/SortedPair.d.ts'
import type { CharCharPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharCharSortedPair extends SortedPair<string>, CharCharPair, Serializable, Object{
    contains(arg0: Object): boolean;
    contains(arg0: Object): boolean;
    contains(arg0: string): boolean;
    first(): string;
    first(arg0: string): CharCharPair;
    first(arg0: string): CharCharPair;
    firstChar(): string;
    key(): string;
    key(arg0: string): CharCharPair;
    key(arg0: string): CharCharPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharCharPair;
    left(arg0: string): CharCharPair;
    right(): string;
    right(arg0: string): CharCharPair;
    right(arg0: string): CharCharPair;
    second(): string;
    second(arg0: string): CharCharPair;
    second(arg0: string): CharCharPair;
    secondChar(): string;
    value(): string;
    value(arg0: string): CharCharPair;
    value(arg0: string): CharCharPair;
    valueChar(): string;
}