import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectMap$Entry.d.ts'
import type { ShortObjectPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortObjectPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2ObjectArrayMap$MapEntry extends Object implements Short2ObjectMap$Entry<V>, ShortObjectPair<V>, Map$Entry<number, V> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): ShortObjectPair<V>;
    firstShort(): number;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): ShortObjectPair<V>;
    keyShort(): number;
    left(): number;
    left<V extends unknown>(arg0: number): ShortObjectPair<V>;
    leftShort(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): ShortObjectPair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}