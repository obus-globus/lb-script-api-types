import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketDecoderConfig$Builder extends Object {
    private constructor(arg0: WebSocketDecoderConfig)
    // private allowExtensions: boolean;
    // private allowMaskMismatch: boolean;
    // private closeOnProtocolViolation: boolean;
    // private expectMaskedFrames: boolean;
    // private maxFramePayloadLength: number;
    // private withUTF8Validator: boolean;
    allowExtensions(arg0: boolean): WebSocketDecoderConfig$Builder;
    allowMaskMismatch(arg0: boolean): WebSocketDecoderConfig$Builder;
    build(): WebSocketDecoderConfig;
    closeOnProtocolViolation(arg0: boolean): WebSocketDecoderConfig$Builder;
    expectMaskedFrames(arg0: boolean): WebSocketDecoderConfig$Builder;
    maxFramePayloadLength(arg0: number): WebSocketDecoderConfig$Builder;
    withUTF8Validator(arg0: boolean): WebSocketDecoderConfig$Builder;
}