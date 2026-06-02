import type { JwkFactory } from '../../../../io/jsonwebtoken/impl/security/JwkFactory.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DispatchingJwkFactory extends Object implements JwkFactory<Key, Jwk<Key>> {
    constructor(arg0: E[])
    constructor()
    // private factories: E[];
    createJwk(arg0: JwkContext<Key>): Jwk<Key>;
    newContext(arg0: JwkContext<Object>, arg1: Key): JwkContext<Key>;
}