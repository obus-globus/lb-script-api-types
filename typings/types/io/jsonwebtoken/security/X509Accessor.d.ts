import type { URI } from '../../../java/net/URI.d.ts'
import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface X509Accessor extends Object{
    getX509Chain(): X509Certificate[];
    getX509Sha1Thumbprint(): number[];
    getX509Sha256Thumbprint(): number[];
    getX509Url(): URI;
}