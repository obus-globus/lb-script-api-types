import type { WebSocketClientProtocolConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientProtocolConfig.d.ts'
import type { WebSocketCloseStatus } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketCloseStatus.d.ts'
import type { WebSocketVersion } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketVersion.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class WebSocketClientProtocolConfig$Builder extends Object {
    private constructor(arg0: WebSocketClientProtocolConfig)
    private constructor(arg0: URI, arg1: string, arg2: WebSocketVersion, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean, arg7: boolean, arg8: boolean, arg9: WebSocketCloseStatus, arg10: boolean, arg11: number, arg12: number, arg13: boolean, arg14: boolean, arg15: boolean)
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
    absoluteUpgradeUrl(arg0: boolean): WebSocketClientProtocolConfig$Builder;
    allowExtensions(arg0: boolean): WebSocketClientProtocolConfig$Builder;
    allowMaskMismatch(arg0: boolean): WebSocketClientProtocolConfig$Builder;
    build(): WebSocketClientProtocolConfig;
    customHeaders(arg0: Map$Entry<string, string>[]): WebSocketClientProtocolConfig$Builder;
    dropPongFrames(arg0: boolean): WebSocketClientProtocolConfig$Builder;
    forceCloseTimeoutMillis(arg0: number): WebSocketClientProtocolConfig$Builder;
    generateOriginHeader(arg0: boolean): WebSocketClientProtocolConfig$Builder;
    handleCloseFrames(arg0: boolean): WebSocketClientProtocolConfig$Builder;
    handshakeTimeoutMillis(arg0: number): WebSocketClientProtocolConfig$Builder;
    maxFramePayloadLength(arg0: number): WebSocketClientProtocolConfig$Builder;
    performMasking(arg0: boolean): WebSocketClientProtocolConfig$Builder;
    sendCloseFrame(arg0: WebSocketCloseStatus): WebSocketClientProtocolConfig$Builder;
    subprotocol(arg0: string): WebSocketClientProtocolConfig$Builder;
    version(arg0: WebSocketVersion): WebSocketClientProtocolConfig$Builder;
    webSocketUri(arg0: URI): WebSocketClientProtocolConfig$Builder;
    webSocketUri(arg0: string): WebSocketClientProtocolConfig$Builder;
    withUTF8Validator(arg0: boolean): WebSocketClientProtocolConfig$Builder;
}