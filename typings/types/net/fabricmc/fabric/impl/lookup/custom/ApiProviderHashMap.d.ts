import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ApiProviderMap } from '../../../../../../net/fabricmc/fabric/api/lookup/v1/custom/ApiProviderMap.d.ts'
export class ApiProviderHashMap<K extends unknown, V extends unknown> extends Object implements ApiProviderMap<K, V> {
    constructor()
    // private lookups: JavaMap<K, V>;
    get(arg0: K): V;
    putIfAbsent(arg0: K, arg1: V): V;
}