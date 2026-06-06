import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { CharCharPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharCharPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2CharOpenHashMap$MapEntry extends Object implements Char2CharMap$Entry, CharCharPair, Map$Entry<string, string> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: CharCharPair) => kotlin.Boolean;
    static of(paramarg0: string, paramarg1: string): CharCharPair;
    constructor(null_: Char2CharOpenHashMap$MapEntry)
    constructor(null_: Char2CharOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharCharPair;
    firstChar(): string;
    getCharKey(): string;
    getCharValue(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharCharPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharCharPair;
    leftChar(): string;
    right(): string;
    right(arg0: string): CharCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): CharCharPair;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): CharCharPair;
    valueChar(): string;
}