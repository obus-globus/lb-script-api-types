import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { CharShortPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharShortPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2ShortArrayMap$MapEntry extends Object implements Char2ShortMap$Entry, CharShortPair, Map$Entry<string, number> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: string, paramarg1: number): CharShortPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharShortPair;
    firstChar(): string;
    getCharKey(): string;
    getShortValue(): number;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharShortPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharShortPair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): CharShortPair;
    secondShort(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharShortPair;
    valueShort(): number;
}