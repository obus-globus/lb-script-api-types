import type { Socket } from '../../../../../java/net/Socket.d.ts'
import type { X509Certificate } from '../../../../../java/security/cert/X509Certificate.d.ts'
import type { SSLContext } from '../../../../../javax/net/ssl/SSLContext.d.ts'
import type { SSLEngine } from '../../../../../javax/net/ssl/SSLEngine.d.ts'
import type { X509ExtendedTrustManager } from '../../../../../javax/net/ssl/X509ExtendedTrustManager.d.ts'
export class IgnoringTrustManager extends X509ExtendedTrustManager {
    static makeIgnoringSSLContext(): SSLContext;
    constructor()
    checkClientTrusted(arg0: X509Certificate[], arg1: string): void;
    checkClientTrusted(arg0: X509Certificate[], arg1: string, arg2: Socket): void;
    checkClientTrusted(arg0: X509Certificate[], arg1: string, arg2: SSLEngine): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string, arg2: Socket): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string, arg2: SSLEngine): void;
    getAcceptedIssuers(): X509Certificate[];
}