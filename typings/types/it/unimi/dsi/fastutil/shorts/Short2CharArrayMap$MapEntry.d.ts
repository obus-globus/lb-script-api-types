import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { ShortCharPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortCharPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2CharArrayMap$MapEntry extends Object implements Short2CharMap$Entry, ShortCharPair, Map$Entry<number, string> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortCharPair;
    firstShort(): number;
    getCharValue(): string;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortCharPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortCharPair;
    leftShort(): number;
    right(): string;
    right(arg0: string): ShortCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): ShortCharPair;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): ShortCharPair;
    valueChar(): string;
}