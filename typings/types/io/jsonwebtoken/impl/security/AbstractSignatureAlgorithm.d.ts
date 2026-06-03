import type { AbstractSecureDigestAlgorithm } from '../../../../io/jsonwebtoken/impl/security/AbstractSecureDigestAlgorithm.d.ts'
import type { SecureRequest } from '../../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { SignatureAlgorithm } from '../../../../io/jsonwebtoken/security/SignatureAlgorithm.d.ts'
import type { VerifySecureDigestRequest } from '../../../../io/jsonwebtoken/security/VerifySecureDigestRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { Signature } from '../../../../java/security/Signature.d.ts'
export abstract class AbstractSignatureAlgorithm extends AbstractSecureDigestAlgorithm<PrivateKey, PublicKey> implements SignatureAlgorithm {
    constructor(arg0: string, arg1: string)
    doDigest(arg0: SecureRequest<InputStream, PrivateKey>): number[];
    doVerify(arg0: VerifySecureDigestRequest<PublicKey>): boolean;
    sign(arg0: Signature, arg1: InputStream): number[];
    validateKey(arg0: Key, arg1: boolean): void;
    verify(arg0: VerifySecureDigestRequest<PublicKey>): boolean;
    verify(arg0: Signature, arg1: InputStream, arg2: number[]): boolean;
}