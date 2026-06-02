import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CertificateChainCleaner$Companion } from '../../../okhttp3/internal/tls/CertificateChainCleaner$Companion.d.ts'
export abstract class CertificateChainCleaner extends Object {
    static Companion: CertificateChainCleaner$Companion;
    constructor()
    clean(chain: Certificate[], hostname: string): Certificate[];
}