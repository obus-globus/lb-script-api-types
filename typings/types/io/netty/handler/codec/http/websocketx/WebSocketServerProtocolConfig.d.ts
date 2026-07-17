import type { WebSocketCloseStatus } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketCloseStatus.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { WebSocketServerProtocolConfig$Builder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketServerProtocolConfig$Builder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketServerProtocolConfig extends Object {
    static newBuilder(): WebSocketServerProtocolConfig$Builder;
    private constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: WebSocketCloseStatus, arg7: boolean, arg8: WebSocketDecoderConfig)
    // private checkStartsWith: boolean;
    // private decoderConfig: WebSocketDecoderConfig;
    // private dropPongFrames: boolean;
    // private forceCloseTimeoutMillis: number;
    // private handleCloseFrames: boolean;
    // private handshakeTimeoutMillis: number;
    // private sendCloseFrame: WebSocketCloseStatus;
    // private subprotocols: string;
    // private websocketPath: string;
    checkStartsWith(): boolean;
    decoderConfig(): WebSocketDecoderConfig;
    dropPongFrames(): boolean;
    forceCloseTimeoutMillis(): number;
    handleCloseFrames(): boolean;
    handshakeTimeoutMillis(): number;
    sendCloseFrame(): WebSocketCloseStatus;
    subprotocols(): string;
    toBuilder(): WebSocketServerProtocolConfig$Builder;
    toString(): string;
    websocketPath(): string;
}