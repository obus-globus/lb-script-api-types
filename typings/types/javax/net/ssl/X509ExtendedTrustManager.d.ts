import type { Socket } from '../../../java/net/Socket.d.ts'
import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { SSLEngine } from '../../../javax/net/ssl/SSLEngine.d.ts'
import type { X509TrustManager } from '../../../javax/net/ssl/X509TrustManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class X509ExtendedTrustManager extends Object implements X509TrustManager {
    constructor()
    checkClientTrusted(arg0: X509Certificate[], arg1: string, arg2: Socket): void;
    checkClientTrusted(arg0: X509Certificate[], arg1: string, arg2: SSLEngine): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string, arg2: Socket): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string, arg2: SSLEngine): void;
}