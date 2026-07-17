import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { HashAlgorithm } from '../../../../io/jsonwebtoken/security/HashAlgorithm.d.ts'
import type { X509Builder } from '../../../../io/jsonwebtoken/security/X509Builder.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class X509BuilderSupport extends Object implements X509Builder<X509BuilderSupport> {
    constructor(arg0: JavaMap<any, any>, arg1: Class<RuntimeException>)
    // private GET_X509_BYTES: Function<X509Certificate, number[]>;
    // private computeX509Sha1Thumbprint: boolean;
    // private computeX509Sha256Thumbprint: boolean;
    // private map: JavaMap<any, any>;
    apply(): void;
    // private computeThumbprint(arg0: X509Certificate, arg1: HashAlgorithm): number[];
    x509Chain(arg0: X509Certificate[]): X509BuilderSupport;
    x509Sha1Thumbprint(arg0: boolean): X509BuilderSupport;
    x509Sha1Thumbprint(arg0: number[]): X509BuilderSupport;
    x509Sha256Thumbprint(arg0: boolean): X509BuilderSupport;
    x509Sha256Thumbprint(arg0: number[]): X509BuilderSupport;
    x509Url(arg0: URI): X509BuilderSupport;
}