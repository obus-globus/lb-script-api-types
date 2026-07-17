import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { CharShortPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharShortPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2ShortOpenCustomHashMap$MapEntry extends Object implements Char2ShortMap$Entry, CharShortPair, Map$Entry<string, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): string;
    getValue(): number;
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