import type { SecureDigestAlgorithm } from '../../../../io/jsonwebtoken/security/SecureDigestAlgorithm.d.ts'
import type { SecureRequest } from '../../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { VerifySecureDigestRequest } from '../../../../io/jsonwebtoken/security/VerifySecureDigestRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NoneSignatureAlgorithm extends Object implements SecureDigestAlgorithm<Key, Key> {
    private constructor()
    digest(arg0: SecureRequest<InputStream, Key>): number[];
    equals(arg0: Object | null): boolean;
    getId(): string;
    hashCode(): number;
    toString(): string;
    verify(arg0: VerifySecureDigestRequest<Key>): boolean;
}