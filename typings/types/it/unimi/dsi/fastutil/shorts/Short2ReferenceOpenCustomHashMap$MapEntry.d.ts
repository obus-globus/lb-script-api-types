import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { ShortReferencePair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortReferencePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2ReferenceOpenCustomHashMap$MapEntry extends Object implements Short2ReferenceMap$Entry<V>, ShortReferencePair<V>, Map$Entry<number, V> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends unknown>(arg0: number): ShortReferencePair<V>;
    firstShort(): number;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends unknown>(arg0: number): ShortReferencePair<V>;
    keyShort(): number;
    left(): number;
    left<V extends unknown>(arg0: number): ShortReferencePair<V>;
    leftShort(): number;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): ShortReferencePair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}