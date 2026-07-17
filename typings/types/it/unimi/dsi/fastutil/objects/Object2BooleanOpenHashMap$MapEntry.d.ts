import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { ObjectBooleanPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBooleanPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2BooleanOpenHashMap$MapEntry extends Object implements Object2BooleanMap$Entry<K>, ObjectBooleanPair<K>, Map$Entry<K, boolean> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
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
    right<K extends unknown>(arg0: boolean): ObjectBooleanPair<K>;
    rightBoolean(): boolean;
    second(): boolean;
    second<K extends unknown>(arg0: boolean): ObjectBooleanPair<K>;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value<K extends unknown>(arg0: boolean): ObjectBooleanPair<K>;
    valueBoolean(): boolean;
}