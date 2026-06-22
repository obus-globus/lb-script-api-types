import type { OpenSslSessionContext } from '../../../../io/netty/handler/ssl/OpenSslSessionContext.d.ts'
import type { Principal } from '../../../../java/security/Principal.d.ts'
import type { SSLSession } from '../../../../javax/net/ssl/SSLSession.d.ts'
import type { X509Certificate } from '../../../../javax/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslSession extends SSLSession, Object{
    getApplicationBufferSize(): number;
    getCipherSuite(): string;
    getCreationTime(): number;
    getLastAccessedTime(): number;
    getLocalPrincipal(): Principal;
    getPacketBufferSize(): number;
    getPeerCertificateChain(): X509Certificate[];
    getPeerHost(): string;
    getPeerPort(): number;
    getPeerPrincipal(): Principal;
    getProtocol(): string;
    getSessionContext(): OpenSslSessionContext;
    getValue(arg0: string): Object;
    hasPeerCertificates(): boolean;
    invalidate(): void;
    isValid(): boolean;
    putValue(arg0: string, arg1: Object): void;
    removeValue(arg0: string): void;
}