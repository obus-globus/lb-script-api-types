import type { WebSocketExtensionData } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionData.d.ts'
import type { WebSocketExtensionFilterProvider } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilterProvider.d.ts'
import type { WebSocketServerExtension } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketServerExtension.d.ts'
import type { WebSocketServerExtensionHandshaker } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketServerExtensionHandshaker.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class PerMessageDeflateServerExtensionHandshaker extends Object implements WebSocketServerExtensionHandshaker {
    static MAX_WINDOW_SIZE: number;
    static MIN_WINDOW_SIZE: number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean)
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean, arg5: WebSocketExtensionFilterProvider)
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean, arg5: WebSocketExtensionFilterProvider, arg6: number)
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean, arg5: number)
    // private allowServerNoContext: boolean;
    // private allowServerWindowSize: boolean;
    // private compressionLevel: number;
    // private extensionFilterProvider: WebSocketExtensionFilterProvider;
    // private maxAllocation: number;
    // private preferredClientNoContext: boolean;
    // private preferredClientWindowSize: number;
    handshakeExtension(arg0: WebSocketExtensionData): WebSocketServerExtension;
}