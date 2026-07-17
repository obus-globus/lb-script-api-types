import type { WebSocketCloseStatus } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketCloseStatus.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { WebSocketDecoderConfig$Builder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig$Builder.d.ts'
import type { WebSocketServerProtocolConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketServerProtocolConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketServerProtocolConfig$Builder extends Object {
    private constructor(arg0: WebSocketServerProtocolConfig)
    private constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: WebSocketCloseStatus, arg7: boolean, arg8: WebSocketDecoderConfig)
    // private checkStartsWith: boolean;
    // private decoderConfig: WebSocketDecoderConfig;
    // private decoderConfigBuilder: WebSocketDecoderConfig$Builder;
    // private dropPongFrames: boolean;
    // private forceCloseTimeoutMillis: number;
    // private handleCloseFrames: boolean;
    // private handshakeTimeoutMillis: number;
    // private sendCloseFrame: WebSocketCloseStatus;
    // private subprotocols: string;
    // private websocketPath: string;
    allowExtensions(arg0: boolean): WebSocketServerProtocolConfig$Builder;
    allowMaskMismatch(arg0: boolean): WebSocketServerProtocolConfig$Builder;
    build(): WebSocketServerProtocolConfig;
    checkStartsWith(arg0: boolean): WebSocketServerProtocolConfig$Builder;
    closeOnProtocolViolation(arg0: boolean): WebSocketServerProtocolConfig$Builder;
    decoderConfig(arg0: WebSocketDecoderConfig): WebSocketServerProtocolConfig$Builder;
    // private decoderConfigBuilder(): WebSocketDecoderConfig$Builder;
    dropPongFrames(arg0: boolean): WebSocketServerProtocolConfig$Builder;
    expectMaskedFrames(arg0: boolean): WebSocketServerProtocolConfig$Builder;
    forceCloseTimeoutMillis(arg0: number): WebSocketServerProtocolConfig$Builder;
    handleCloseFrames(arg0: boolean): WebSocketServerProtocolConfig$Builder;
    handshakeTimeoutMillis(arg0: number): WebSocketServerProtocolConfig$Builder;
    maxFramePayloadLength(arg0: number): WebSocketServerProtocolConfig$Builder;
    sendCloseFrame(arg0: WebSocketCloseStatus): WebSocketServerProtocolConfig$Builder;
    subprotocols(arg0: string): WebSocketServerProtocolConfig$Builder;
    websocketPath(arg0: string): WebSocketServerProtocolConfig$Builder;
    withUTF8Validator(arg0: boolean): WebSocketServerProtocolConfig$Builder;
}