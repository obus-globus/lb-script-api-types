import type { HashAlgorithm } from '../../../io/jsonwebtoken/security/HashAlgorithm.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JwkThumbprint extends Object{
    getHashAlgorithm(): HashAlgorithm;
    toByteArray(): number[];
    toURI(): URI;
}