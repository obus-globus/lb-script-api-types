import type { WebSocketDecoderConfig$Builder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig$Builder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketDecoderConfig extends Object {
    static newBuilder(): WebSocketDecoderConfig$Builder;
    constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: any)
    // private allowExtensions: boolean;
    // private allowMaskMismatch: boolean;
    // private closeOnProtocolViolation: boolean;
    // private expectMaskedFrames: boolean;
    // private maxFramePayloadLength: number;
    // private withUTF8Validator: boolean;
    allowExtensions(): boolean;
    allowMaskMismatch(): boolean;
    closeOnProtocolViolation(): boolean;
    expectMaskedFrames(): boolean;
    maxFramePayloadLength(): number;
    toBuilder(): WebSocketDecoderConfig$Builder;
    toString(): string;
    withUTF8Validator(): boolean;
}