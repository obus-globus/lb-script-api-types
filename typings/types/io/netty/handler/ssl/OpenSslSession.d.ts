import type { OpenSslSessionContext } from '../../../../io/netty/handler/ssl/OpenSslSessionContext.d.ts'
import type { SSLSession } from '../../../../javax/net/ssl/SSLSession.d.ts'
import type { X509Certificate } from '../../../../javax/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslSession extends SSLSession, Object{
    getPeerCertificateChain(): X509Certificate[];
    getSessionContext(): OpenSslSessionContext;
    hasPeerCertificates(): boolean;
}