import type { WebSocketDecoderConfig$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketDecoderConfig$Builder extends Object {
    private constructor(arg0: WebSocketDecoderConfig)
    constructor(arg0: WebSocketDecoderConfig, arg1: WebSocketDecoderConfig$1)
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