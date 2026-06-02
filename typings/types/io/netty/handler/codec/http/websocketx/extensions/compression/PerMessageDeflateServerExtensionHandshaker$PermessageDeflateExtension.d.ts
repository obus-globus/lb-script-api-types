import type { WebSocketExtensionData } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionData.d.ts'
import type { WebSocketExtensionDecoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionDecoder.d.ts'
import type { WebSocketExtensionEncoder } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionEncoder.d.ts'
import type { WebSocketExtensionFilterProvider } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketExtensionFilterProvider.d.ts'
import type { WebSocketServerExtension } from '../../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketServerExtension.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class PerMessageDeflateServerExtensionHandshaker$PermessageDeflateExtension extends Object implements WebSocketServerExtension {
    static RSV1: number;
    static RSV2: number;
    static RSV3: number;
    constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: number, arg5: WebSocketExtensionFilterProvider, arg6: number)
    // private clientNoContext: boolean;
    // private clientWindowSize: number;
    // private compressionLevel: number;
    // private extensionFilterProvider: WebSocketExtensionFilterProvider;
    // private maxAllocation: number;
    // private serverNoContext: boolean;
    // private serverWindowSize: number;
    newExtensionDecoder(): WebSocketExtensionDecoder;
    newExtensionEncoder(): WebSocketExtensionEncoder;
    newReponseData(): WebSocketExtensionData;
    rsv(): number;
}