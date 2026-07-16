import type { SSLContext } from '../../../javax/net/ssl/SSLContext.d.ts'
import type { SSLSocket } from '../../../javax/net/ssl/SSLSocket.d.ts'
import type { SSLSocketFactory } from '../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { X509TrustManager } from '../../../javax/net/ssl/X509TrustManager.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { Jdk9Platform$Companion } from '../../../okhttp3/internal/platform/Jdk9Platform$Companion.d.ts'
import type { Platform } from '../../../okhttp3/internal/platform/Platform.d.ts'
export class Jdk9Platform extends Platform {
    static Companion: Jdk9Platform$Companion;
    static INFO: number;
    static WARN: number;
    static get(): Platform;
    constructor()
    configureTlsExtensions(sslSocket: SSLSocket, hostname: string | null, protocols: Protocol[]): void;
    getSelectedProtocol(sslSocket: SSLSocket): string | null;
    newSSLContext(): SSLContext;
    trustManager(sslSocketFactory: SSLSocketFactory): X509TrustManager | null;
}