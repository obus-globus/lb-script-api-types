import type { AbstractSecureDigestAlgorithm } from '../../../../io/jsonwebtoken/impl/security/AbstractSecureDigestAlgorithm.d.ts'
import type { MacAlgorithm } from '../../../../io/jsonwebtoken/security/MacAlgorithm.d.ts'
import type { SecretKeyBuilder } from '../../../../io/jsonwebtoken/security/SecretKeyBuilder.d.ts'
import type { SecureRequest } from '../../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { VerifySecureDigestRequest } from '../../../../io/jsonwebtoken/security/VerifySecureDigestRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class DefaultMacAlgorithm extends AbstractSecureDigestAlgorithm<SecretKey, SecretKey> implements MacAlgorithm {
    constructor(arg0: string, arg1: string, arg2: number)
    // private minKeyBitLength: number;
    // private assertAlgorithmName(arg0: SecretKey, arg1: boolean): void;
    doDigest(arg0: SecureRequest<InputStream, SecretKey>): number[];
    doVerify(arg0: VerifySecureDigestRequest<SecretKey>): boolean;
    getKeyBitLength(): number;
    // private isJwaStandard(): boolean;
    key(): SecretKeyBuilder;
    validateKey(arg0: Key, arg1: boolean): void;
}