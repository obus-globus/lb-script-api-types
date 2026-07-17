import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { ReferenceBytePair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceBytePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2ByteOpenHashMap$MapEntry extends Object implements Reference2ByteMap$Entry<K>, ReferenceBytePair<K>, Map$Entry<K, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly key: K;
    getKey(): K;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    getByteValue(): number;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, number>;
    right(): number;
    right<K extends unknown>(arg0: number): ReferenceBytePair<K>;
    rightByte(): number;
    second(): number;
    second<K extends unknown>(arg0: number): ReferenceBytePair<K>;
    secondByte(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value<K extends unknown>(arg0: number): ReferenceBytePair<K>;
    valueByte(): number;
}