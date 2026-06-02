import type { URI } from '../../../java/net/URI.d.ts'
import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface X509Mutator<T extends X509Mutator<T>> extends Object{
    x509Chain(arg0: X509Certificate[]): T;
    x509Sha1Thumbprint(arg0: number[]): T;
    x509Sha256Thumbprint(arg0: number[]): T;
    x509Url(arg0: URI): T;
}