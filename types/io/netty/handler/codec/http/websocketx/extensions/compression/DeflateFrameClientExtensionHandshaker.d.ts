import type { WebSocketClientExtension } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketClientExtension.d.ts'
import type { WebSocketClientExtensionHandshaker } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketClientExtensionHandshaker.d.ts'
import type { WebSocketExtensionData } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionData.d.ts'
import type { WebSocketExtensionFilterProvider } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilterProvider.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DeflateFrameClientExtensionHandshaker extends Object implements WebSocketClientExtensionHandshaker {
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number)
    constructor(arg0: number, arg1: boolean)
    constructor(arg0: number, arg1: boolean, arg2: WebSocketExtensionFilterProvider)
    constructor(arg0: number, arg1: boolean, arg2: WebSocketExtensionFilterProvider, arg3: number)
    constructor(arg0: number, arg1: boolean, arg2: number)
    // private compressionLevel: number;
    // private extensionFilterProvider: WebSocketExtensionFilterProvider;
    // private maxAllocation: number;
    // private useWebkitExtensionName: boolean;
    handshakeExtension(arg0: WebSocketExtensionData): WebSocketClientExtension;
    newRequestData(): WebSocketExtensionData;
}