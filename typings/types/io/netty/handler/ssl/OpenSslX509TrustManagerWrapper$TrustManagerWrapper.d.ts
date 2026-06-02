import type { X509TrustManager } from '../../../../javax/net/ssl/X509TrustManager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslX509TrustManagerWrapper$TrustManagerWrapper extends Object{
    wrapIfNeeded(arg0: X509TrustManager): X509TrustManager;
}