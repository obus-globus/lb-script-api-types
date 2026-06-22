import type { OpenSslSession } from '../../../../io/netty/handler/ssl/OpenSslSession.d.ts'
import type { OpenSslSessionContext } from '../../../../io/netty/handler/ssl/OpenSslSessionContext.d.ts'
import type { OpenSslSessionId } from '../../../../io/netty/handler/ssl/OpenSslSessionId.d.ts'
import type { Principal } from '../../../../java/security/Principal.d.ts'
import type { Certificate } from '../../../../java/security/cert/Certificate.d.ts'
import type { SSLSessionContext } from '../../../../javax/net/ssl/SSLSessionContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslInternalSession extends OpenSslSession, Object{
    getApplicationBufferSize(): number;
    getCipherSuite(): string;
    getCreationTime(): number;
    getLastAccessedTime(): number;
    getLocalPrincipal(): Principal;
    getPacketBufferSize(): number;
    getPeerHost(): string;
    getPeerPort(): number;
    getPeerPrincipal(): Principal;
    getProtocol(): string;
    getSessionContext(): OpenSslSessionContext;
    getSessionContext(): SSLSessionContext;
    getValue(arg0: string): Object;
    handshakeFinished(arg0: number[], arg1: string, arg2: string, arg3: number[], arg4: number[][], arg5: number, arg6: number): void;
    hasPeerCertificates(): boolean;
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
    tryExpandApplicationBufferSize(arg0: number): void;
}