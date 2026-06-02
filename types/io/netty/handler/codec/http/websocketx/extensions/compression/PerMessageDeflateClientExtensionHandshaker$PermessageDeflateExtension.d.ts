import type { WebSocketClientExtension } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketClientExtension.d.ts'
import type { WebSocketExtensionDecoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionDecoder.d.ts'
import type { WebSocketExtensionEncoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionEncoder.d.ts'
import type { WebSocketExtensionFilterProvider } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilterProvider.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class PerMessageDeflateClientExtensionHandshaker$PermessageDeflateExtension extends Object implements WebSocketClientExtension {
    static RSV1: number;
    static RSV2: number;
    static RSV3: number;
    constructor(null_: PerMessageDeflateClientExtensionHandshaker$PermessageDeflateExtension, arg1: boolean, arg2: number, arg3: boolean, arg4: number, arg5: WebSocketExtensionFilterProvider, arg6: number)
    // private clientNoContext: boolean;
    // private clientWindowSize: number;
    // private extensionFilterProvider: WebSocketExtensionFilterProvider;
    // private maxAllocation: number;
    // private serverNoContext: boolean;
    // private serverWindowSize: number;
    newExtensionDecoder(): WebSocketExtensionDecoder;
    newExtensionEncoder(): WebSocketExtensionEncoder;
    rsv(): number;
}