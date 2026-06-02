import type { Certificate } from '../java/security/cert/Certificate.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { CertificatePinner } from '../okhttp3/CertificatePinner.d.ts'
export class CertificatePinner$Companion extends Object {
    DEFAULT: CertificatePinner;
    pin(certificate: Certificate): string;
}