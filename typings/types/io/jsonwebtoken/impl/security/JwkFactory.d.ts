import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JwkFactory<K extends Key, J extends Jwk<K>> extends Object{
    createJwk(arg0: JwkContext<K>): J;
    newContext(arg0: JwkContext<Object>, arg1: K): JwkContext<K>;
}