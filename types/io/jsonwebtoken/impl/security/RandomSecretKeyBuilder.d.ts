import type { DefaultSecretKeyBuilder } from '../../../../io/jsonwebtoken/impl/security/DefaultSecretKeyBuilder.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class RandomSecretKeyBuilder extends DefaultSecretKeyBuilder {
    constructor(arg0: string, arg1: number)
    build(): SecretKey;
}