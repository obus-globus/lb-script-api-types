import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { CharObjectPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharObjectPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2ObjectArrayMap$MapEntry extends Object implements Char2ObjectMap$Entry<V>, CharObjectPair<V>, Map$Entry<string, V> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): string;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    first(): string;
    first<V extends unknown>(arg0: string): CharObjectPair<V>;
    firstChar(): string;
    getCharKey(): string;
    hashCode(): number;
    key(): string;
    key<V extends unknown>(arg0: string): CharObjectPair<V>;
    keyChar(): string;
    left(): string;
    left<V extends unknown>(arg0: string): CharObjectPair<V>;
    leftChar(): string;
    right<V extends unknown>(): V;
    right<V extends unknown>(arg0: V): CharObjectPair<V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}