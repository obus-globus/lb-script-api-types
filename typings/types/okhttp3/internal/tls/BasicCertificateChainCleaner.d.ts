import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BasicCertificateChainCleaner$Companion } from '../../../okhttp3/internal/tls/BasicCertificateChainCleaner$Companion.d.ts'
import type { CertificateChainCleaner } from '../../../okhttp3/internal/tls/CertificateChainCleaner.d.ts'
import type { TrustRootIndex } from '../../../okhttp3/internal/tls/TrustRootIndex.d.ts'
export class BasicCertificateChainCleaner extends CertificateChainCleaner {
    static Companion: BasicCertificateChainCleaner$Companion;
    constructor(trustRootIndex: TrustRootIndex)
    // private trustRootIndex: TrustRootIndex;
    clean(chain: Certificate[], hostname: string): Certificate[];
    equals(other: Object | null): boolean;
    hashCode(): number;
    // private verifySignature(toVerify: X509Certificate, signingCert: X509Certificate, minIntermediates: number): boolean;
}