import type { X509Certificate } from '../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class CertificatePinner$Pin extends Object {
    constructor(pattern: string, pin: string)
    readonly hash: ByteString;
    readonly hashAlgorithm: string;
    readonly pattern: string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    matchesCertificate(certificate: X509Certificate): boolean;
    matchesHostname(hostname: string): boolean;
    toString(): string;
}