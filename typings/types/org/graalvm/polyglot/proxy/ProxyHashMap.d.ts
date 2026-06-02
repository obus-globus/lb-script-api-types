import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { Proxy } from '../../../../org/graalvm/polyglot/proxy/Proxy.d.ts'
export interface ProxyHashMap extends Object, Proxy{
    getHashEntriesIterator(): Object;
    getHashSize(): number;
    getHashValue(key: Value): Object;
    hasHashEntry(key: Value): boolean;
    putHashEntry(key: Value, value: Value): void;
    removeHashEntry(key: Value): boolean;
}