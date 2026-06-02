import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { SNIServerName } from '../../../javax/net/ssl/SNIServerName.d.ts'
import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
import type { X509Certificate } from '../../../javax/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ExtendedSSLSession extends Object implements SSLSession {
    constructor()
    exportKeyingMaterialData(arg0: string, arg1: number[], arg2: number): number[];
    exportKeyingMaterialKey(arg0: string, arg1: string, arg2: number[], arg3: number): SecretKey;
    getLocalSupportedSignatureAlgorithms(): string[];
    getPeerCertificateChain(): X509Certificate[];
    getPeerSupportedSignatureAlgorithms(): string[];
    getRequestedServerNames(): SNIServerName[];
    getStatusResponses(): number[][];
}