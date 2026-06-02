import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { Proxy } from '../../../../org/graalvm/polyglot/proxy/Proxy.d.ts'
export interface ProxyExecutable extends Object, Proxy{
    execute(arguments: Value[]): Object;
}