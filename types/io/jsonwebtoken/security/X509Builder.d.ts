import type { X509Mutator } from '../../../io/jsonwebtoken/security/X509Mutator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface X509Builder<T extends X509Builder<T>> extends X509Mutator<T>, Object{
    x509Sha1Thumbprint(arg0: boolean): T;
    x509Sha256Thumbprint(arg0: boolean): T;
}