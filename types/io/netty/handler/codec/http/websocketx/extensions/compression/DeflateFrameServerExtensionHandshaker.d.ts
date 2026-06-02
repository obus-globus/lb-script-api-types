import type { WebSocketExtensionData } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionData.d.ts'
import type { WebSocketExtensionFilterProvider } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilterProvider.d.ts'
import type { WebSocketServerExtension } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketServerExtension.d.ts'
import type { WebSocketServerExtensionHandshaker } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketServerExtensionHandshaker.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DeflateFrameServerExtensionHandshaker extends Object implements WebSocketServerExtensionHandshaker {
    static DEFAULT_COMPRESSION_LEVEL: number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: WebSocketExtensionFilterProvider)
    constructor(arg0: number, arg1: WebSocketExtensionFilterProvider, arg2: number)
    constructor(arg0: number, arg1: number)
    // private compressionLevel: number;
    // private extensionFilterProvider: WebSocketExtensionFilterProvider;
    // private maxAllocation: number;
    handshakeExtension(arg0: WebSocketExtensionData): WebSocketServerExtension;
}