import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { LongObjectPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongObjectPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2ObjectOpenCustomHashMap$MapEntry extends Object implements Long2ObjectMap$Entry<V>, LongObjectPair<V>, Map$Entry<number, V> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): LongObjectPair<V>;
    firstLong(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): LongObjectPair<V>;
    keyLong(): number;
    left(): number;
    left<V extends unknown>(arg0: number): LongObjectPair<V>;
    leftLong(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): LongObjectPair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}