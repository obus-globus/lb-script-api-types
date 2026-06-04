import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { CharDoublePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharDoublePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2DoubleLinkedOpenHashMap$MapEntry extends Object implements Char2DoubleMap$Entry, CharDoublePair, Map$Entry<string, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: CharDoublePair) => kotlin.Boolean;
    static of(paramarg0: string, paramarg1: number): CharDoublePair;
    constructor(null_: Char2DoubleLinkedOpenHashMap$MapEntry)
    constructor(null_: Char2DoubleLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: string;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharDoublePair;
    firstChar(): string;
    getCharKey(): string;
    getDoubleValue(): number;
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
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharDoublePair;
    valueDouble(): number;
}