import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { FloatBytePair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBytePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2ByteOpenCustomHashMap$MapEntry extends Object implements Float2ByteMap$Entry, FloatBytePair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatBytePair;
    firstFloat(): number;
    getByteValue(): number;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatBytePair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatBytePair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): FloatBytePair;
    secondByte(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatBytePair;
    valueByte(): number;
}