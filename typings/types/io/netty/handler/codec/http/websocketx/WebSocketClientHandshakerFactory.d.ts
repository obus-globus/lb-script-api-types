import type { WebSocketClientHandshaker } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientHandshaker.d.ts'
import type { WebSocketVersion } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketVersion.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class WebSocketClientHandshakerFactory extends Object {
    static newHandshaker(paramarg0: URI, paramarg1: WebSocketVersion, paramarg2: string, paramarg3: boolean, paramarg4: Map$Entry<string, string>[]): WebSocketClientHandshaker;
    static newHandshaker(paramarg0: URI, paramarg1: WebSocketVersion, paramarg2: string, paramarg3: boolean, paramarg4: Map$Entry<string, string>[], paramarg5: number): WebSocketClientHandshaker;
    static newHandshaker(paramarg0: URI, paramarg1: WebSocketVersion, paramarg2: string, paramarg3: boolean, paramarg4: Map$Entry<string, string>[], paramarg5: number, paramarg6: boolean, paramarg7: boolean): WebSocketClientHandshaker;
    static newHandshaker(paramarg0: URI, paramarg1: WebSocketVersion, paramarg2: string, paramarg3: boolean, paramarg4: Map$Entry<string, string>[], paramarg5: number, paramarg6: boolean, paramarg7: boolean, paramarg8: number): WebSocketClientHandshaker;
    static newHandshaker(paramarg0: URI, paramarg1: WebSocketVersion, paramarg2: string, paramarg3: boolean, paramarg4: Map$Entry<string, string>[], paramarg5: number, paramarg6: boolean, paramarg7: boolean, paramarg8: number, paramarg9: boolean): WebSocketClientHandshaker;
    static newHandshaker(paramarg0: URI, paramarg1: WebSocketVersion, paramarg2: string, paramarg3: boolean, paramarg4: Map$Entry<string, string>[], paramarg5: number, paramarg6: boolean, paramarg7: boolean, paramarg8: number, paramarg9: boolean, paramarg10: boolean): WebSocketClientHandshaker;
    private constructor()
}