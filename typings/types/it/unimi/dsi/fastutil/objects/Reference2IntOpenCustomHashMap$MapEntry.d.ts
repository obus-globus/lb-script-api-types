import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntMap$Entry.d.ts'
import type { ReferenceIntPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceIntPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2IntOpenCustomHashMap$MapEntry extends Object implements Reference2IntMap$Entry<K>, ReferenceIntPair<K>, Map$Entry<K, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    readonly key: K;
    getKey(): K;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    getIntValue(): number;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, number>;
    right(): number;
    right<K extends unknown>(arg0: number): ReferenceIntPair<K>;
    rightInt(): number;
    second(): number;
    second<K extends unknown>(arg0: number): ReferenceIntPair<K>;
    secondInt(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value<K extends unknown>(arg0: number): ReferenceIntPair<K>;
    valueInt(): number;
}