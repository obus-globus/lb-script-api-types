import type { WebSocketClientProtocolConfig$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { WebSocketClientProtocolConfig$Builder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientProtocolConfig$Builder.d.ts'
import type { WebSocketCloseStatus } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketCloseStatus.d.ts'
import type { WebSocketVersion } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketVersion.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class WebSocketClientProtocolConfig extends Object {
    static newBuilder(): WebSocketClientProtocolConfig$Builder;
    private constructor(arg0: URI, arg1: string, arg2: WebSocketVersion, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean, arg7: boolean, arg8: boolean, arg9: WebSocketCloseStatus, arg10: boolean, arg11: number, arg12: number, arg13: boolean, arg14: boolean, arg15: boolean)
    constructor(arg0: URI, arg1: string, arg2: WebSocketVersion, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean, arg7: boolean, arg8: boolean, arg9: WebSocketCloseStatus, arg10: boolean, arg11: number, arg12: number, arg13: boolean, arg14: boolean, arg15: boolean, arg16: WebSocketClientProtocolConfig$1)
    // private absoluteUpgradeUrl: boolean;
    // private allowExtensions: boolean;
    // private allowMaskMismatch: boolean;
    // private customHeaders: Map$Entry<string, string>[];
    // private dropPongFrames: boolean;
    // private forceCloseTimeoutMillis: number;
    // private generateOriginHeader: boolean;
    // private handleCloseFrames: boolean;
    // private handshakeTimeoutMillis: number;
    // private maxFramePayloadLength: number;
    // private performMasking: boolean;
    // private sendCloseFrame: WebSocketCloseStatus;
    // private subprotocol: string;
    // private version: WebSocketVersion;
    // private webSocketUri: URI;
    // private withUTF8Validator: boolean;
    absoluteUpgradeUrl(): boolean;
    allowExtensions(): boolean;
    allowMaskMismatch(): boolean;
    customHeaders(): Map$Entry<string, string>[];
    dropPongFrames(): boolean;
    forceCloseTimeoutMillis(): number;
    generateOriginHeader(): boolean;
    handleCloseFrames(): boolean;
    handshakeTimeoutMillis(): number;
    maxFramePayloadLength(): number;
    performMasking(): boolean;
    sendCloseFrame(): WebSocketCloseStatus;
    subprotocol(): string;
    toBuilder(): WebSocketClientProtocolConfig$Builder;
    toString(): string;
    version(): WebSocketVersion;
    webSocketUri(): URI;
    withUTF8Validator(): boolean;
}