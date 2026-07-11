import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { X500Principal } from '../../../javax/security/auth/x500/X500Principal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TrustRootIndex } from '../../../okhttp3/internal/tls/TrustRootIndex.d.ts'
export class BasicTrustRootIndex extends Object implements TrustRootIndex {
    constructor(...caCerts: X509Certificate[])
    // private subjectToCaCerts: Map<X500Principal, X509Certificate[]>;
    equals(other: Object | null): boolean;
    findByIssuerAndSignature(cert: X509Certificate): X509Certificate | null;
    hashCode(): number;
}