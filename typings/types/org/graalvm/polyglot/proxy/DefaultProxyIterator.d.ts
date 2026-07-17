import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { ProxyIterator } from '../../../../org/graalvm/polyglot/proxy/ProxyIterator.d.ts'
export class DefaultProxyIterator extends Object implements ProxyIterator {
    constructor(iterator: Iterator<Object>)
    // private iterator: Iterator<Object>;
    getNext(): Object;
    hasNext(): boolean;
}