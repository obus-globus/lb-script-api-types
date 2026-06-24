import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { IntCharPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntCharPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2CharLinkedOpenHashMap$MapEntry extends Object implements Int2CharMap$Entry, IntCharPair, Map$Entry<number, string> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: string): IntCharPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
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