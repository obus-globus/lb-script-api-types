import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { CharReferencePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharReferencePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2ReferenceOpenHashMap$MapEntry extends Object implements Char2ReferenceMap$Entry<V>, CharReferencePair<V>, Map$Entry<string, V> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): string;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    first(): string;
    first<V extends unknown>(arg0: string): CharReferencePair<V>;
    firstChar(): string;
    getCharKey(): string;
    hashCode(): number;
    key(): string;
    key<V extends unknown>(arg0: string): CharReferencePair<V>;
    keyChar(): string;
    left(): string;
    left<V extends unknown>(arg0: string): CharReferencePair<V>;
    leftChar(): string;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): CharReferencePair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}