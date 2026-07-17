import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { FamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/FamilyJwkFactory.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AsymmetricJwkFactory extends Object implements FamilyJwkFactory<Key, JavaMap<any, any>> {
    constructor(arg0: FamilyJwkFactory<Key, JavaMap<any, any>>, arg1: FamilyJwkFactory<Key, JavaMap<any, any>>)
    readonly id: string;
    // private privateFactory: FamilyJwkFactory<Key, JavaMap<any, any>>;
    // private publicFactory: FamilyJwkFactory<Key, JavaMap<any, any>>;
    createJwk(arg0: JavaMap<any, any>): JavaMap<any, any>;
    getId(): string;
    newContext(arg0: JavaMap<any, any>, arg1: Key): JavaMap<any, any>;
    supports(arg0: JavaMap<any, any>): boolean;
    supports(arg0: Key): boolean;
}