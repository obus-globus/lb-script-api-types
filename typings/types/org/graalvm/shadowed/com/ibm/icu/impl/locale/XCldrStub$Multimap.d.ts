import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../../java/util/Map$Entry.d.ts'
export class XCldrStub$Multimap<K extends unknown, V extends unknown> extends Object {
    private constructor(map: JavaMap<K, V[]>, setClass: Class<Object>)
    // private map: JavaMap<K, V[]>;
    // private setClass: Class<V[]>;
    asMap(): JavaMap<K, V[]>;
    // private createSetIfMissing(key: K): V[];
    entries(): Map$Entry<K, V>[];
    equals(obj: Object | null): boolean;
    get(key: K): V[];
    // private getInstance(): V[];
    hashCode(): number;
    keySet(): K[];
    put(key: K, value: V): void;
    putAll(key: K, ...values: V[]): XCldrStub$Multimap<K, V>;
    putAll(key: K, values: V[]): void;
    putAll(keys: K[], value: V): void;
    putAll(source: XCldrStub$Multimap<K, V>): void;
    size(): number;
    values(): V[];
}