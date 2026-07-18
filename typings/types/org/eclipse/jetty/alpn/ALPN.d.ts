import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLSocket } from '../../../../javax/net/ssl/SSLSocket.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ALPN$Provider } from '../../../../org/eclipse/jetty/alpn/ALPN$Provider.d.ts'
export class ALPN extends Object {
    static debug: boolean;
    static get(paramarg0: SSLEngine): ALPN$Provider;
    static get(paramarg0: SSLSocket): ALPN$Provider;
    static put(paramarg0: SSLEngine, paramarg1: ALPN$Provider): void;
    static put(paramarg0: SSLSocket, paramarg1: ALPN$Provider): void;
    static remove(paramarg0: SSLEngine): ALPN$Provider;
    static remove(paramarg0: SSLSocket): ALPN$Provider;
    private constructor()
}