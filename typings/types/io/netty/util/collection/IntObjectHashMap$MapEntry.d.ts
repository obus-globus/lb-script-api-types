import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class IntObjectHashMap$MapEntry extends Object implements Map$Entry<number, V> {
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private entryIndex: number;
    readonly key: number;
    readonly value: V;
    setValue<V extends unknown>(arg0: V): V;
    // private verifyExists(): void;
}