import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { LongBytePair } from '../../../../../it/unimi/dsi/fastutil/longs/LongBytePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2ByteOpenHashMap$MapEntry extends Object implements Long2ByteMap$Entry, LongBytePair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongBytePair;
    firstLong(): number;
    getByteValue(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongBytePair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongBytePair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): LongBytePair;
    secondByte(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongBytePair;
    valueByte(): number;
}