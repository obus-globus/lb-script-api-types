import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProxyArray } from '../../../../org/graalvm/polyglot/proxy/ProxyArray.d.ts'
import type { ProxyIterator } from '../../../../org/graalvm/polyglot/proxy/ProxyIterator.d.ts'
export class DefaultProxyArrayIterator extends Object implements ProxyIterator {
    constructor(array: ProxyArray)
    // private array: ProxyArray;
    // private index: number;
    getNext(): Object;
    hasNext(): boolean;
}