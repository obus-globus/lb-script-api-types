import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { ShortDoublePair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortDoublePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2DoubleArrayMap$MapEntry extends Object implements Short2DoubleMap$Entry, ShortDoublePair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortDoublePair;
    firstShort(): number;
    getDoubleValue(): number;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortDoublePair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortDoublePair;
    leftShort(): number;
    right(): number;
    right(arg0: number): ShortDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ShortDoublePair;
    secondDouble(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortDoublePair;
    valueDouble(): number;
}