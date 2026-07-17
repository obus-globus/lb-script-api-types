import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { FloatCharPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatCharPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2CharOpenHashMap$MapEntry extends Object implements Float2CharMap$Entry, FloatCharPair, Map$Entry<number, string> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatCharPair;
    firstFloat(): number;
    getCharValue(): string;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatCharPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatCharPair;
    leftFloat(): number;
    right(): string;
    right(arg0: string): FloatCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): FloatCharPair;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): FloatCharPair;
    valueChar(): string;
}