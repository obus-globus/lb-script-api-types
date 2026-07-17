import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { ObjectCharPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectCharPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2CharLinkedOpenCustomHashMap$MapEntry extends Object implements Object2CharMap$Entry<K>, ObjectCharPair<K>, Map$Entry<K, string> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly key: K;
    getKey(): K;
    getValue(): string;
    equals(arg0: Object | null): boolean;
    getCharValue(): string;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, string>;
    right(): string;
    right<K extends unknown>(arg0: string): ObjectCharPair<K>;
    rightChar(): string;
    second(): string;
    second<K extends unknown>(arg0: string): ObjectCharPair<K>;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value<K extends unknown>(arg0: string): ObjectCharPair<K>;
    valueChar(): string;
}