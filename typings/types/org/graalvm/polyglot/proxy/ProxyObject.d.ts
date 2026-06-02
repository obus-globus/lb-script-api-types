import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { Proxy } from '../../../../org/graalvm/polyglot/proxy/Proxy.d.ts'
export interface ProxyObject extends Object, Proxy{
    getMember(key: string): Object;
    getMemberKeys(): Object;
    hasMember(key: string): boolean;
    putMember(key: string, value: Value): void;
    removeMember(key: string): boolean;
}