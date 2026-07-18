import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { WebSocketDeflateExtension$Companion } from '../../../io/ktor/websocket/WebSocketDeflateExtension$Companion.d.ts'
import type { WebSocketDeflateExtension$Config } from '../../../io/ktor/websocket/WebSocketDeflateExtension$Config.d.ts'
import type { WebSocketExtension } from '../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { WebSocketExtensionFactory } from '../../../io/ktor/websocket/WebSocketExtensionFactory.d.ts'
import type { WebSocketExtensionHeader } from '../../../io/ktor/websocket/WebSocketExtensionHeader.d.ts'
import type { Deflater } from '../../../java/util/zip/Deflater.d.ts'
import type { Inflater } from '../../../java/util/zip/Inflater.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WebSocketDeflateExtension extends Object implements WebSocketExtension<WebSocketDeflateExtension$Config> {
    static Companion: WebSocketDeflateExtension$Companion;
    constructor(config: WebSocketDeflateExtension$Config)
    // private config: WebSocketDeflateExtension$Config;
    // private decompressIncoming: boolean;
    // private deflater: Deflater;
    readonly factory: WebSocketExtensionFactory<WebSocketDeflateExtension$Config, WebSocketExtension<WebSocketDeflateExtension$Config>>;
    // private incomingNoContextTakeover: boolean;
    /*not mapped: */ getIncomingNoContextTakeover$ktor_websockets(): boolean;
    // private inflater: Inflater;
    // private outgoingNoContextTakeover: boolean;
    /*not mapped: */ getOutgoingNoContextTakeover$ktor_websockets(): boolean;
    readonly protocols: WebSocketExtensionHeader[];
    clientNegotiation(negotiatedProtocols: WebSocketExtensionHeader[]): boolean;
    processIncomingFrame(frame: Frame): Frame;
    processOutgoingFrame(frame: Frame): Frame;
    serverNegotiation(requestedProtocols: WebSocketExtensionHeader[]): WebSocketExtensionHeader[];
}