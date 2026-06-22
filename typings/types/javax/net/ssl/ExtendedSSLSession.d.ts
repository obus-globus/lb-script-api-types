import type { Principal } from '../../../java/security/Principal.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { SNIServerName } from '../../../javax/net/ssl/SNIServerName.d.ts'
import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
import type { SSLSessionContext } from '../../../javax/net/ssl/SSLSessionContext.d.ts'
import type { X509Certificate } from '../../../javax/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ExtendedSSLSession extends Object implements SSLSession {
    constructor()
    exportKeyingMaterialData(arg0: string, arg1: number[], arg2: number): number[];
    exportKeyingMaterialKey(arg0: string, arg1: string, arg2: number[], arg3: number): SecretKey;
    getApplicationBufferSize(): number;
    getCipherSuite(): string;
    getCreationTime(): number;
    getLastAccessedTime(): number;
    getLocalPrincipal(): Principal;
    getLocalSupportedSignatureAlgorithms(): string[];
    getPacketBufferSize(): number;
    getPeerCertificateChain(): X509Certificate[];
    getPeerHost(): string;
    getPeerPort(): number;
    getPeerPrincipal(): Principal;
    getPeerSupportedSignatureAlgorithms(): string[];
    getProtocol(): string;
    getRequestedServerNames(): SNIServerName[];
    getSessionContext(): SSLSessionContext;
    getStatusResponses(): number[][];
    getValue(arg0: string): Object;
    invalidate(): void;
    isValid(): boolean;
    putValue(arg0: string, arg1: Object): void;
    removeValue(arg0: string): void;
}