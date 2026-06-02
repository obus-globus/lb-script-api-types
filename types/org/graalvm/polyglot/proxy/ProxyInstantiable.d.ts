import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { Proxy } from '../../../../org/graalvm/polyglot/proxy/Proxy.d.ts'
export interface ProxyInstantiable extends Object, Proxy{
    newInstance(arguments: Value[]): Object;
}