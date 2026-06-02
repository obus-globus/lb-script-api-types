import type { AbstractSecurityBuilder } from '../../../../io/jsonwebtoken/impl/security/AbstractSecurityBuilder.d.ts'
import type { SecretKeyBuilder } from '../../../../io/jsonwebtoken/security/SecretKeyBuilder.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class DefaultSecretKeyBuilder extends AbstractSecurityBuilder<SecretKey, SecretKeyBuilder> implements SecretKeyBuilder {
    constructor(arg0: string, arg1: number)
    // private BIT_LENGTH: number;
    // private JCA_NAME: string;
    build(): SecretKey;
}