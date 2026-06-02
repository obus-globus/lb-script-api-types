import type { Principal } from '../../../java/security/Principal.d.ts'
import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
import type { SSLSocket } from '../../../javax/net/ssl/SSLSocket.d.ts'
import type { X509Certificate } from '../../../javax/security/cert/X509Certificate.d.ts'
export class HandshakeCompletedEvent extends EventObject {
    constructor(arg0: SSLSocket, arg1: SSLSession)
    readonly session: SSLSession;
    getCipherSuite(): string;
    getLocalCertificates(): Certificate[];
    getLocalPrincipal(): Principal;
    getPeerCertificateChain(): X509Certificate[];
    getPeerCertificates(): Certificate[];
    getPeerPrincipal(): Principal;
    getSession(): SSLSession;
    getSocket(): SSLSocket;
}