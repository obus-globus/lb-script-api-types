import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceMap$Entry.d.ts'
import type { ByteReferencePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteReferencePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2ReferenceOpenCustomHashMap$MapEntry extends Object implements Byte2ReferenceMap$Entry<V>, ByteReferencePair<V>, Map$Entry<number, V> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): ByteReferencePair<V>;
    firstByte(): number;
    getByteKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): ByteReferencePair<V>;
    keyByte(): number;
    left(): number;
    left<V extends unknown>(arg0: number): ByteReferencePair<V>;
    leftByte(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): ByteReferencePair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}