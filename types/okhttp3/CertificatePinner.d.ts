import type { Certificate } from '../java/security/cert/Certificate.d.ts'
import type { X509Certificate } from '../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Function0 } from '../kotlin/jvm/functions/Function0.d.ts'
import type { CertificatePinner$Companion } from '../okhttp3/CertificatePinner$Companion.d.ts'
import type { CertificatePinner$Pin } from '../okhttp3/CertificatePinner$Pin.d.ts'
import type { CertificateChainCleaner } from '../okhttp3/internal/tls/CertificateChainCleaner.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class CertificatePinner extends Object {
    static Companion: CertificatePinner$Companion;
    static DEFAULT: CertificatePinner;
    static pin(paramarg0: Certificate): string;
    static sha1Hash(paramarg0: X509Certificate): ByteString;
    static sha256Hash(paramarg0: X509Certificate): ByteString;
    constructor(pins: CertificatePinner$Pin[], certificateChainCleaner: CertificateChainCleaner | null)
    // private certificateChainCleaner: CertificateChainCleaner | null;
    /*not mapped: */ getCertificateChainCleaner$okhttp(): CertificateChainCleaner | null;
    readonly pins: CertificatePinner$Pin[];
    check(hostname: string, cleanedPeerCertificatesFn: Function0<X509Certificate[]>): void;
    check(hostname: string, peerCertificates: Certificate[]): void;
    check(hostname: string, peerCertificates: Certificate[]): void;
    equals(other: Object | null): boolean;
    findMatchingPins(hostname: string): CertificatePinner$Pin[];
    hashCode(): number;
    withCertificateChainCleaner(certificateChainCleaner: CertificateChainCleaner): CertificatePinner;
}