import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { X509ExtendedTrustManager } from '../../../../javax/net/ssl/X509ExtendedTrustManager.d.ts'
import type { X509TrustManager } from '../../../../javax/net/ssl/X509TrustManager.d.ts'
export class EnhancingX509ExtendedTrustManager extends X509ExtendedTrustManager {
    constructor(arg0: X509TrustManager)
    // private wrapped: X509ExtendedTrustManager;
    checkClientTrusted(arg0: X509Certificate[], arg1: string): void;
    checkClientTrusted(arg0: X509Certificate[], arg1: string, arg2: Socket): void;
    checkClientTrusted(arg0: X509Certificate[], arg1: string, arg2: SSLEngine): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string, arg2: Socket): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string, arg2: SSLEngine): void;
    getAcceptedIssuers(): X509Certificate[];
}