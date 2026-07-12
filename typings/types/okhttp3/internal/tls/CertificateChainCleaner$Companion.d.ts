import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { X509TrustManager } from '../../../javax/net/ssl/X509TrustManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CertificateChainCleaner } from '../../../okhttp3/internal/tls/CertificateChainCleaner.d.ts'
export class CertificateChainCleaner$Companion extends Object {
    get(trustManager: X509TrustManager): CertificateChainCleaner;
    get(...caCerts: X509Certificate[]): CertificateChainCleaner;
}