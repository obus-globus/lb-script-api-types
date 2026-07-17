import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { FamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/FamilyJwkFactory.d.ts'
import type { JwkFactory } from '../../../../io/jsonwebtoken/impl/security/JwkFactory.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DispatchingJwkFactory extends Object implements JwkFactory<Key, JavaMap<any, any>> {
    constructor()
    constructor(arg0: FamilyJwkFactory<any, any>[])
    // private factories: FamilyJwkFactory<Key, any>[];
    createJwk(arg0: JavaMap<any, any>): JavaMap<any, any>;
    newContext(arg0: JavaMap<any, any>, arg1: Key): JavaMap<any, any>;
}