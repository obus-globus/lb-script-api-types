import type { OpenSslInternalSession } from '../../../../io/netty/handler/ssl/OpenSslInternalSession.d.ts'
import type { OpenSslSessionContext } from '../../../../io/netty/handler/ssl/OpenSslSessionContext.d.ts'
import type { OpenSslSessionId } from '../../../../io/netty/handler/ssl/OpenSslSessionId.d.ts'
import type { Principal } from '../../../../java/security/Principal.d.ts'
import type { Certificate } from '../../../../java/security/cert/Certificate.d.ts'
import type { ExtendedSSLSession } from '../../../../javax/net/ssl/ExtendedSSLSession.d.ts'
import type { SNIServerName } from '../../../../javax/net/ssl/SNIServerName.d.ts'
import type { X509Certificate } from '../../../../javax/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ExtendedOpenSslSession extends ExtendedSSLSession implements OpenSslInternalSession {
    constructor(arg0: OpenSslInternalSession)
    // private wrapped: OpenSslInternalSession;
    equals(arg0: Object | null): boolean;
    getApplicationBufferSize(): number;
    getCipherSuite(): string;
    getCreationTime(): number;
    getId(): number[];
    getLastAccessedTime(): number;
    getLocalCertificates(): Certificate[];
    getLocalPrincipal(): Principal;
    getLocalSupportedSignatureAlgorithms(): string[];
    getPacketBufferSize(): number;
    getPeerCertificateChain(): X509Certificate[];
    getPeerCertificates(): Certificate[];
    getPeerHost(): string;
    getPeerPort(): number;
    getPeerPrincipal(): Principal;
    getPeerSupportedSignatureAlgorithms(): string[];
    getProtocol(): string;
    getRequestedServerNames(): SNIServerName[];
    getSessionContext(): OpenSslSessionContext;
    getStatusResponses(): number[][];
    getValue(arg0: string): Object;
    getValueNames(): string[];
    handshakeFinished(arg0: number[], arg1: string, arg2: string, arg3: number[], arg4: number[][], arg5: number, arg6: number): void;
    hasPeerCertificates(): boolean;
    hashCode(): number;
    invalidate(): void;
    isValid(): boolean;
    keyValueStorage(): { [key: string]: Object };
    prepareHandshake(): void;
    putValue(arg0: string, arg1: Object): void;
    removeValue(arg0: string): void;
    sessionId(): OpenSslSessionId;
    setLastAccessedTime(arg0: number): void;
    setLocalCertificate(arg0: Certificate[]): void;
    setSessionDetails(arg0: number, arg1: number, arg2: OpenSslSessionId, arg3: { [key: string]: Object }): void;
    toString(): string;
    tryExpandApplicationBufferSize(arg0: number): void;
}