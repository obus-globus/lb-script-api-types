import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { X509ExtendedTrustManager } from '../../../../javax/net/ssl/X509ExtendedTrustManager.d.ts'
export class ResumptionController$X509ExtendedWrapTrustManager extends X509ExtendedTrustManager {
    constructor(arg0: X509ExtendedTrustManager, arg1: SSLEngine[])
    // private confirmedValidations: SSLEngine[];
    // private trustManager: X509ExtendedTrustManager;
    checkClientTrusted(arg0: X509Certificate[], arg1: string): void;
    checkClientTrusted(arg0: X509Certificate[], arg1: string, arg2: Socket): void;
    checkClientTrusted(arg0: X509Certificate[], arg1: string, arg2: SSLEngine): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string, arg2: Socket): void;
    checkServerTrusted(arg0: X509Certificate[], arg1: string, arg2: SSLEngine): void;
    getAcceptedIssuers(): X509Certificate[];
}