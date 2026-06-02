import type { FamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/FamilyJwkFactory.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AsymmetricJwkFactory extends Object implements FamilyJwkFactory<Key, Jwk<Key>> {
    constructor(arg0: FamilyJwkFactory<Key, Jwk<Key>>, arg1: FamilyJwkFactory<Key, Jwk<Key>>)
    readonly id: string;
    // private privateFactory: FamilyJwkFactory<Key, Jwk<Key>>;
    // private publicFactory: FamilyJwkFactory<Key, Jwk<Key>>;
    createJwk(arg0: JwkContext<Key>): Jwk<Key>;
    getId(): string;
    newContext(arg0: JwkContext<Object>, arg1: Key): JwkContext<Key>;
    supports(arg0: JwkContext<Object>): boolean;
    supports(arg0: Key): boolean;
}