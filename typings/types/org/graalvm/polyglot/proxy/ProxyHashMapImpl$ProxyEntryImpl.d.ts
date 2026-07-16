import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { ProxyArray } from '../../../../org/graalvm/polyglot/proxy/ProxyArray.d.ts'
import type { ProxyHashMapImpl } from '../../../../org/graalvm/polyglot/proxy/ProxyHashMapImpl.d.ts'
export class ProxyHashMapImpl$ProxyEntryImpl extends Object implements ProxyArray {
    static fromArray(...paramvalues: Object[]): ProxyArray;
    static fromList(paramvalues: Object[]): ProxyArray;
    constructor(null_: ProxyHashMapImpl, mapEntry: Map$Entry<Object, Object>)
    // private mapEntry: Map$Entry<Object, Object>;
    get(index: number): Object;
    getIterator(): Object;
    getSize(): number;
    remove(index: number): boolean;
    set(index: number, value: Value): void;
}