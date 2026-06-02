import type { AbstractSecurityBuilder } from '../../../../io/jsonwebtoken/impl/security/AbstractSecurityBuilder.d.ts'
import type { KeyBuilder } from '../../../../io/jsonwebtoken/security/KeyBuilder.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
export abstract class ProvidedKeyBuilder<K extends Key, B extends KeyBuilder<K, B>> extends AbstractSecurityBuilder<K, B> implements KeyBuilder<K, B> {
    constructor(arg0: K)
    // private key: K;
    build(): K;
    doBuild(): K;
}