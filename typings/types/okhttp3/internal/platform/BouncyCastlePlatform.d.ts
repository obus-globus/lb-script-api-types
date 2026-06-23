import type { SSLContext } from '../../../javax/net/ssl/SSLContext.d.ts'
import type { SSLSocket } from '../../../javax/net/ssl/SSLSocket.d.ts'
import type { SSLSocketFactory } from '../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { X509TrustManager } from '../../../javax/net/ssl/X509TrustManager.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { BouncyCastlePlatform$Companion } from '../../../okhttp3/internal/platform/BouncyCastlePlatform$Companion.d.ts'
import type { Platform } from '../../../okhttp3/internal/platform/Platform.d.ts'
import type { Platform$Companion } from '../../../okhttp3/internal/platform/Platform$Companion.d.ts'
export class BouncyCastlePlatform extends Platform {
    static Companion: BouncyCastlePlatform$Companion;
    static Companion: Platform$Companion;
    static INFO: number;
    static WARN: number;
    static get(): Platform;
    private constructor()
    // private provider: { [key: string]: any };
    configureTlsExtensions(sslSocket: SSLSocket, hostname: string | null, protocols: Protocol[]): void;
    getSelectedProtocol(sslSocket: SSLSocket): string | null;
    newSSLContext(): SSLContext;
    platformTrustManager(): X509TrustManager;
    trustManager(sslSocketFactory: SSLSocketFactory): X509TrustManager;
}