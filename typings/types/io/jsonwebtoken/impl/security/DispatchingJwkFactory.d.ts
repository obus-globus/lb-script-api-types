import type { FamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/FamilyJwkFactory.d.ts'
import type { JwkFactory } from '../../../../io/jsonwebtoken/impl/security/JwkFactory.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DispatchingJwkFactory extends Object implements JwkFactory<Key, { [key: string]: any }> {
    constructor()
    constructor(arg0: FamilyJwkFactory<any, any>[])
    // private factories: FamilyJwkFactory<Key, any>[];
    createJwk(arg0: { [key: string]: any }): { [key: string]: any };
    newContext(arg0: { [key: string]: any }, arg1: Key): { [key: string]: any };
}