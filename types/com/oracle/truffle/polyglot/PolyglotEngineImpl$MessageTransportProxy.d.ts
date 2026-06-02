import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MessageEndpoint } from '../../../../org/graalvm/polyglot/io/MessageEndpoint.d.ts'
import type { MessageTransport } from '../../../../org/graalvm/polyglot/io/MessageTransport.d.ts'
export class PolyglotEngineImpl$MessageTransportProxy extends Object implements MessageTransport {
    constructor(transport: MessageTransport)
    // private transport: MessageTransport;
    open(uri: URI, peerEndpoint: MessageEndpoint): MessageEndpoint;
}