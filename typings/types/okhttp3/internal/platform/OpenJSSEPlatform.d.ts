import type { JavaMap } from '../../../JavaMap.d.ts'
import type { SSLContext } from '../../../javax/net/ssl/SSLContext.d.ts'
import type { SSLSocket } from '../../../javax/net/ssl/SSLSocket.d.ts'
import type { SSLSocketFactory } from '../../../javax/net/ssl/SSLSocketFactory.d.ts'
import type { X509TrustManager } from '../../../javax/net/ssl/X509TrustManager.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { OpenJSSEPlatform$Companion } from '../../../okhttp3/internal/platform/OpenJSSEPlatform$Companion.d.ts'
import type { Platform } from '../../../okhttp3/internal/platform/Platform.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class OpenJSSEPlatform extends Platform {
    static Companion: OpenJSSEPlatform$Companion;
    static INFO: number;
    static WARN: number;
    static get(): Platform;
    private constructor()
    // private provider: JavaMap<any, any>;
    configureTlsExtensions(sslSocket: SSLSocket, hostname: string | null, protocols: Protocol[], echConfigList: ByteString | null): void;
    getSelectedProtocol(sslSocket: SSLSocket): string | null;
    newSSLContext(): SSLContext;
    platformTrustManager(): X509TrustManager;
    trustManager(sslSocketFactory: SSLSocketFactory): X509TrustManager;
}