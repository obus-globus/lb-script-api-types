import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { ProxyHashMap } from '../../../../org/graalvm/polyglot/proxy/ProxyHashMap.d.ts'
export class ProxyHashMapImpl extends Object implements ProxyHashMap {
    constructor(values: JavaMap<Object, Object>)
    // private values: JavaMap<Object, Object>;
    getHashEntriesIterator(): Object;
    getHashSize(): number;
    getHashValue(key: Value): Object;
    hasHashEntry(key: Value): boolean;
    putHashEntry(key: Value, value: Value): void;
    removeHashEntry(key: Value): boolean;
}