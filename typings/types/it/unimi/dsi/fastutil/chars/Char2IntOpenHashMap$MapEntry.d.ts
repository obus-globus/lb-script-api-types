import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
import type { CharIntPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharIntPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2IntOpenHashMap$MapEntry extends Object implements Char2IntMap$Entry, CharIntPair, Map$Entry<string, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): string;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharIntPair;
    firstChar(): string;
    getCharKey(): string;
    getIntValue(): number;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharIntPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharIntPair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): CharIntPair;
    secondInt(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharIntPair;
    valueInt(): number;
}