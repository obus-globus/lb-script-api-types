import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { X509TrustManager } from '../../../../javax/net/ssl/X509TrustManager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ResumableX509ExtendedTrustManager extends X509TrustManager, Object{
    resumeClientTrusted(arg0: X509Certificate[], arg1: SSLEngine): void;
    resumeServerTrusted(arg0: X509Certificate[], arg1: SSLEngine): void;
}