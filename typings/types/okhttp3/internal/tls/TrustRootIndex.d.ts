import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TrustRootIndex extends Object{
    findByIssuerAndSignature(cert: X509Certificate): X509Certificate | null;
}