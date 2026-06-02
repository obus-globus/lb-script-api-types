import type { Principal } from '../../../java/security/Principal.d.ts'
import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { SSLSessionContext } from '../../../javax/net/ssl/SSLSessionContext.d.ts'
import type { X509Certificate } from '../../../javax/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SSLSession extends Object{
    getApplicationBufferSize(): number;
    getCipherSuite(): string;
    getCreationTime(): number;
    getId(): number[];
    getLastAccessedTime(): number;
    getLocalCertificates(): Certificate[];
    getLocalPrincipal(): Principal;
    getPacketBufferSize(): number;
    getPeerCertificateChain(): X509Certificate[];
    getPeerCertificates(): Certificate[];
    getPeerHost(): string;
    getPeerPort(): number;
    getPeerPrincipal(): Principal;
    getProtocol(): string;
    getSessionContext(): SSLSessionContext;
    getValue(arg0: string): Object;
    getValueNames(): string[];
    invalidate(): void;
    isValid(): boolean;
    putValue(arg0: string, arg1: Object): void;
    removeValue(arg0: string): void;
}