import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Proxy } from '../../../../org/graalvm/polyglot/proxy/Proxy.d.ts'
export interface ProxyIterator extends Object, Proxy{
    getNext(): Object;
    hasNext(): boolean;
}