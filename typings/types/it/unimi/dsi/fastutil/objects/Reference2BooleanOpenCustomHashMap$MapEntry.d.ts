import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { ReferenceBooleanPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceBooleanPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2BooleanOpenCustomHashMap$MapEntry extends Object implements Reference2BooleanMap$Entry<K>, ReferenceBooleanPair<K>, Map$Entry<K, boolean> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly key: K;
    getKey(): K;
    getValue(): boolean;
    equals(arg0: Object | null): boolean;
    getBooleanValue(): boolean;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, boolean>;
    right(): boolean;
    right<K extends unknown>(arg0: boolean): ReferenceBooleanPair<K>;
    rightBoolean(): boolean;
    second(): boolean;
    second<K extends unknown>(arg0: boolean): ReferenceBooleanPair<K>;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value<K extends unknown>(arg0: boolean): ReferenceBooleanPair<K>;
    valueBoolean(): boolean;
}