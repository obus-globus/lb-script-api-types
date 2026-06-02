import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { WebSocketExtensions } from '../../../okhttp3/internal/ws/WebSocketExtensions.d.ts'
export class WebSocketExtensions$Companion extends Object {
    // private HEADER_WEB_SOCKET_EXTENSION: string;
    parse(responseHeaders: Pair<string, string>[]): WebSocketExtensions;
}