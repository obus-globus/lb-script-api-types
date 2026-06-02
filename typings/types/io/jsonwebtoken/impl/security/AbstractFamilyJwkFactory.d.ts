import type { CheckedFunction } from '../../../../io/jsonwebtoken/impl/lang/CheckedFunction.d.ts'
import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { FamilyJwkFactory } from '../../../../io/jsonwebtoken/impl/security/FamilyJwkFactory.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { KeyFactory } from '../../../../java/security/KeyFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractFamilyJwkFactory<K extends Key, J extends Jwk<K>> extends Object implements FamilyJwkFactory<K, J> {
    constructor(arg0: string, arg1: Class<K>, arg2: Parameter<Object>[])
    // private keyType: Class<K>;
    // private ktyValue: string;
    // private params: Parameter<Object>[];
    createJwk(arg0: JwkContext<K>): J;
    createJwkFromKey(arg0: JwkContext<K>): J;
    createJwkFromValues(arg0: JwkContext<K>): J;
    generateKey<T extends Key>(arg0: JwkContext<Object>, arg1: Class<T>, arg2: CheckedFunction<KeyFactory, T>): T;
    generateKey(arg0: JwkContext<K>, arg1: CheckedFunction<KeyFactory, K>): K;
    getId(): string;
    getKeyFactoryJcaName(arg0: JwkContext<Object>): string;
    newContext(arg0: JwkContext<Object>, arg1: K): JwkContext<K>;
    supports(arg0: JwkContext<Object>): boolean;
    supports(arg0: Key): boolean;
    supportsKeyValues(arg0: JwkContext<Object>): boolean;
}