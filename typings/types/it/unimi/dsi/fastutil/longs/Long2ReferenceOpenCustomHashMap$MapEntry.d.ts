import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { LongReferencePair } from '../../../../../it/unimi/dsi/fastutil/longs/LongReferencePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2ReferenceOpenCustomHashMap$MapEntry extends Object implements Long2ReferenceMap$Entry<V>, LongReferencePair<V>, Map$Entry<number, V> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): LongReferencePair<V>;
    firstLong(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): LongReferencePair<V>;
    keyLong(): number;
    left(): number;
    left<V extends unknown>(arg0: number): LongReferencePair<V>;
    leftLong(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): LongReferencePair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}