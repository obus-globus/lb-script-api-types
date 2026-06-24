import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { CharBytePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharBytePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2ByteOpenCustomHashMap$MapEntry extends Object implements Char2ByteMap$Entry, CharBytePair, Map$Entry<string, number> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: string, paramarg1: number): CharBytePair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharBytePair;
    firstChar(): string;
    getByteValue(): number;
    getCharKey(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharBytePair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharBytePair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): CharBytePair;
    secondByte(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharBytePair;
    valueByte(): number;
}