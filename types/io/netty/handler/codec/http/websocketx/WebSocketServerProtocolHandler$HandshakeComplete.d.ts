import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class WebSocketServerProtocolHandler$HandshakeComplete extends Object {
    constructor(arg0: string, arg1: Map$Entry<string, string>[], arg2: string)
    // private requestHeaders: Map$Entry<string, string>[];
    // private requestUri: string;
    // private selectedSubprotocol: string;
    requestHeaders(): Map$Entry<string, string>[];
    requestUri(): string;
    selectedSubprotocol(): string;
}