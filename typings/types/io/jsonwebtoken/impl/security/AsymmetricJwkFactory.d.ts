import type { FamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/FamilyJwkFactory.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AsymmetricJwkFactory extends Object implements FamilyJwkFactory<Key, { [key: string]: any }> {
    constructor(arg0: FamilyJwkFactory<Key, { [key: string]: any }>, arg1: FamilyJwkFactory<Key, { [key: string]: any }>)
    readonly id: string;
    // private privateFactory: FamilyJwkFactory<Key, { [key: string]: any }>;
    // private publicFactory: FamilyJwkFactory<Key, { [key: string]: any }>;
    createJwk(arg0: { [key: string]: any }): { [key: string]: any };
    getId(): string;
    newContext(arg0: { [key: string]: any }, arg1: Key): { [key: string]: any };
    supports(arg0: { [key: string]: any }): boolean;
    supports(arg0: Key): boolean;
}