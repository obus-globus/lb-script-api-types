import type { AbstractSignatureAlgorithm } from '../../../../io/jsonwebtoken/impl/security/AbstractSignatureAlgorithm.d.ts'
import type { KeyPairBuilder } from '../../../../io/jsonwebtoken/security/KeyPairBuilder.d.ts'
import type { SecureRequest } from '../../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { VerifySecureDigestRequest } from '../../../../io/jsonwebtoken/security/VerifySecureDigestRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { ECGenParameterSpec } from '../../../../java/security/spec/ECGenParameterSpec.d.ts'
export class EcSignatureAlgorithm extends AbstractSignatureAlgorithm {
    static transcodeConcatToDER(paramarg0: number[]): number[];
    static transcodeDERToConcat(paramarg0: number[], paramarg1: number): number[];
    private constructor(arg0: number, arg1: string)
    // private KEY_PAIR_GEN_PARAMS: ECGenParameterSpec;
    // private OID: string;
    // private orderBitLength: number;
    // private sigFieldByteLength: number;
    // private signatureByteLength: number;
    doDigest(arg0: SecureRequest<InputStream, PrivateKey>): number[];
    doVerify(arg0: VerifySecureDigestRequest<PublicKey>): boolean;
    isValidRAndS(arg0: PublicKey, arg1: number[]): boolean;
    keyPair(): KeyPairBuilder;
    validateKey(arg0: Key, arg1: boolean): void;
}