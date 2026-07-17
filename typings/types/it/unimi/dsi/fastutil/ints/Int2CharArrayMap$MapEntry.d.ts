import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { IntCharPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntCharPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2CharArrayMap$MapEntry extends Object implements Int2CharMap$Entry, IntCharPair, Map$Entry<number, string> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntCharPair;
    firstInt(): number;
    getCharValue(): string;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntCharPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntCharPair;
    leftInt(): number;
    right(): string;
    right(arg0: string): IntCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): IntCharPair;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): IntCharPair;
    valueChar(): string;
}