import type { OpenSslX509TrustManagerWrapper$TrustManagerWrapper } from '../../../../io/netty/handler/ssl/OpenSslX509TrustManagerWrapper$TrustManagerWrapper.d.ts'
import type { X509TrustManager } from '../../../../javax/net/ssl/X509TrustManager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslX509TrustManagerWrapper$UnsafeTrustManagerWrapper extends Object implements OpenSslX509TrustManagerWrapper$TrustManagerWrapper {
    constructor(arg0: number, arg1: number)
    // private spiOffset: number;
    // private tmOffset: number;
    wrapIfNeeded(arg0: X509TrustManager): X509TrustManager;
}