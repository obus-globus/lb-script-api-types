import type { Class } from '../../../java/lang/Class.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { SSLSocket } from '../../../javax/net/ssl/SSLSocket.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { Jdk8WithJettyBootPlatform$Companion } from '../../../okhttp3/internal/platform/Jdk8WithJettyBootPlatform$Companion.d.ts'
import type { Platform } from '../../../okhttp3/internal/platform/Platform.d.ts'
import type { Platform$Companion } from '../../../okhttp3/internal/platform/Platform$Companion.d.ts'
export class Jdk8WithJettyBootPlatform extends Platform {
    static Companion: Jdk8WithJettyBootPlatform$Companion;
    static Companion: Platform$Companion;
    static INFO: number;
    static WARN: number;
    static get(): Platform;
    constructor(putMethod: Method, getMethod: Method, removeMethod: Method, clientProviderClass: Class<Object>, serverProviderClass: Class<Object>)
    // private clientProviderClass: Class<Object>;
    // private getMethod: Method;
    // private putMethod: Method;
    // private removeMethod: Method;
    // private serverProviderClass: Class<Object>;
    afterHandshake(sslSocket: SSLSocket): void;
    configureTlsExtensions(sslSocket: SSLSocket, hostname: string | null, protocols: Protocol[]): void;
    getSelectedProtocol(sslSocket: SSLSocket): string | null;
}