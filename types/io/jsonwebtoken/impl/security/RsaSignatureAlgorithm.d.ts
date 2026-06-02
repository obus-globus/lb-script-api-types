import type { AbstractSignatureAlgorithm } from '../../../../io/jsonwebtoken/impl/security/AbstractSignatureAlgorithm.d.ts'
import type { KeyPairBuilder } from '../../../../io/jsonwebtoken/security/KeyPairBuilder.d.ts'
import type { SecureRequest } from '../../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { VerifySecureDigestRequest } from '../../../../io/jsonwebtoken/security/VerifySecureDigestRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { AlgorithmParameterSpec } from '../../../../java/security/spec/AlgorithmParameterSpec.d.ts'
export class RsaSignatureAlgorithm extends AbstractSignatureAlgorithm {
    private constructor(arg0: number)
    private constructor(arg0: number, arg1: AlgorithmParameterSpec)
    private constructor(arg0: string, arg1: string, arg2: number, arg3: AlgorithmParameterSpec)
    // private algorithmParameterSpec: AlgorithmParameterSpec;
    // private preferredKeyBitLength: number;
    doDigest(arg0: SecureRequest<InputStream, PrivateKey>): number[];
    doVerify(arg0: VerifySecureDigestRequest<PublicKey>): boolean;
    keyPair(): KeyPairBuilder;
    validateKey(arg0: Key, arg1: boolean): void;
}