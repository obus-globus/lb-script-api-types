import type { WebSocketClientExtension } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketClientExtension.d.ts'
import type { WebSocketClientExtensionHandshaker } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketClientExtensionHandshaker.d.ts'
import type { WebSocketExtensionData } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionData.d.ts'
import type { WebSocketExtensionFilterProvider } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilterProvider.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class PerMessageDeflateClientExtensionHandshaker extends Object implements WebSocketClientExtensionHandshaker {
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean)
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean, arg5: WebSocketExtensionFilterProvider)
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean, arg5: WebSocketExtensionFilterProvider, arg6: number)
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean, arg5: number)
    // private allowClientNoContext: boolean;
    // private allowClientWindowSize: boolean;
    // private compressionLevel: number;
    // private extensionFilterProvider: WebSocketExtensionFilterProvider;
    // private maxAllocation: number;
    // private requestedServerNoContext: boolean;
    // private requestedServerWindowSize: number;
    handshakeExtension(arg0: WebSocketExtensionData): WebSocketClientExtension;
    newRequestData(): WebSocketExtensionData;
}