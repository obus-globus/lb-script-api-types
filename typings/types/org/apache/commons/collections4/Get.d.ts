import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export interface Get<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    containsKey(arg0: Object): boolean;
    containsValue(arg0: Object): boolean;
    entrySet(): Map$Entry<K, V>[];
    get(arg0: Object): V;
    isEmpty(): boolean;
    keySet(): K[];
    remove(arg0: Object): V;
    size(): number;
    values(): V[];
}