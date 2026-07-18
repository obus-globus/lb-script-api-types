import type { JavaMap } from '../../../JavaMap.d.ts'
import type { URLProtocol } from '../../../io/ktor/http/URLProtocol.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class URLProtocol$Companion extends Object {
    readonly HTTP: URLProtocol;
    readonly HTTPS: URLProtocol;
    readonly SOCKS: URLProtocol;
    readonly WS: URLProtocol;
    readonly WSS: URLProtocol;
    readonly byName: JavaMap<string, URLProtocol>;
    createOrDefault(name: string): URLProtocol;
}