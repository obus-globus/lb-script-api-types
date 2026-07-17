import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { ShortFloatPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortFloatPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2FloatLinkedOpenHashMap$MapEntry extends Object implements Short2FloatMap$Entry, ShortFloatPair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortFloatPair;
    firstShort(): number;
    getFloatValue(): number;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortFloatPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortFloatPair;
    leftShort(): number;
    right(): number;
    right(arg0: number): ShortFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): ShortFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortFloatPair;
    valueFloat(): number;
}