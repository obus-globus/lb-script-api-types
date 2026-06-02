import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MessageEndpoint } from '../../../../org/graalvm/polyglot/io/MessageEndpoint.d.ts'
export interface MessageTransport extends Object{
    open(uri: URI, peerEndpoint: MessageEndpoint): MessageEndpoint;
}