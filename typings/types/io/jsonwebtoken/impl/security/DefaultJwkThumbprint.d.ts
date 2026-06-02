import type { HashAlgorithm } from '../../../../io/jsonwebtoken/security/HashAlgorithm.d.ts'
import type { JwkThumbprint } from '../../../../io/jsonwebtoken/security/JwkThumbprint.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultJwkThumbprint extends Object implements JwkThumbprint {
    constructor(arg0: number[], arg1: HashAlgorithm)
    // private alg: HashAlgorithm;
    // private digest: number[];
    // private hashcode: number;
    // private sval: string;
    // private uri: URI;
    equals(arg0: Object | null): boolean;
    getHashAlgorithm(): HashAlgorithm;
    hashCode(): number;
    toByteArray(): number[];
    toString(): string;
    toURI(): URI;
}