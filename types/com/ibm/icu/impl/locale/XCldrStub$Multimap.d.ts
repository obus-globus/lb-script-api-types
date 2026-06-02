import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class XCldrStub$Multimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    private constructor(arg0: Map<K, V[]>, arg1: Class<Object>)
    // private map: Map<K, V[]>;
    // private setClass: Class<V[]>;
    asMap(): Map<K, V[]>;
    // private createSetIfMissing(arg0: K): V[];
    entries(): Map$Entry<K, V>[];
    equals(arg0: Object | null): boolean;
    get(arg0: K): V[];
    // private getInstance(): V[];
    hashCode(): number;
    keySet(): K[];
    put(arg0: K, arg1: V): void;
    putAll(arg0: K, arg1: V[]): XCldrStub$Multimap<K, V>;
    putAll(arg0: K, arg1: E[]): void;
    putAll(arg0: XCldrStub$Multimap<K, V>): void;
    putAll(arg0: E[], arg1: V): void;
    size(): number;
    values(): V[];
}