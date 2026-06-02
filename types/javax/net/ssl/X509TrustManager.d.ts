import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { TrustManager } from '../../../javax/net/ssl/TrustManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface X509TrustManager extends TrustManager, Object{
    checkClientTrusted(arg0: X509Certificate[], arg1: string): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string): void;
    getAcceptedIssuers(): X509Certificate[];
}