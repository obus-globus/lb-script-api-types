import type { URLProtocol } from '../../../io/ktor/http/URLProtocol.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class URLProtocolKt extends Object {
    static isSecure(self: URLProtocol): boolean;
    static isWebsocket(self: URLProtocol): boolean;
}