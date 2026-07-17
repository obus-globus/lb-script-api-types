import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { ObjectLongPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectLongPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2LongArrayMap$MapEntry extends Object implements Object2LongMap$Entry<K>, ObjectLongPair<K>, Map$Entry<K, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly key: K;
    getKey(): K;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    getLongValue(): number;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, number>;
    right(): number;
    right<K extends unknown>(arg0: number): ObjectLongPair<K>;
    rightLong(): number;
    second(): number;
    second<K extends unknown>(arg0: number): ObjectLongPair<K>;
    secondLong(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value<K extends unknown>(arg0: number): ObjectLongPair<K>;
    valueLong(): number;
}