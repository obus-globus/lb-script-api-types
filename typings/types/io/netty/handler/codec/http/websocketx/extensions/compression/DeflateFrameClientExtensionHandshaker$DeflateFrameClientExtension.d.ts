import type { WebSocketClientExtension } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketClientExtension.d.ts'
import type { WebSocketExtensionDecoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionDecoder.d.ts'
import type { WebSocketExtensionEncoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionEncoder.d.ts'
import type { WebSocketExtensionFilterProvider } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilterProvider.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DeflateFrameClientExtensionHandshaker$DeflateFrameClientExtension extends Object implements WebSocketClientExtension {
    static RSV1: number;
    static RSV2: number;
    static RSV3: number;
    constructor(arg0: number, arg1: WebSocketExtensionFilterProvider, arg2: number)
    // private compressionLevel: number;
    // private extensionFilterProvider: WebSocketExtensionFilterProvider;
    // private maxAllocation: number;
    newExtensionDecoder(): WebSocketExtensionDecoder;
    newExtensionEncoder(): WebSocketExtensionEncoder;
    rsv(): number;
}