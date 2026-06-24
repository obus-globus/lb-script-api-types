import type { LazyX509Certificate$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Recycler$EnhancedHandle } from '../../../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { Recycler$Handle } from '../../../../../io/netty/util/Recycler$Handle.d.ts'
import type { CertificateFactory } from '../../../../../java/security/cert/CertificateFactory.d.ts'
import type { X509Certificate } from '../../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LazyX509Certificate$CertFactoryHandle extends Object {
    constructor(arg0: CertificateFactory, arg1: Recycler$Handle<Object>, arg2: LazyX509Certificate$1)
    private constructor(arg0: CertificateFactory, arg1: Recycler$Handle<LazyX509Certificate$CertFactoryHandle>)
    // private factory: CertificateFactory;
    // private handle: Recycler$EnhancedHandle<LazyX509Certificate$CertFactoryHandle>;
    generateCertificate(arg0: number[]): X509Certificate;
    recycle(): void;
}