import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { WebSocketExtensionHeader } from '../../../io/ktor/websocket/WebSocketExtensionHeader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WebSocketDeflateExtension$Config extends Object {
    constructor()
    clientNoContextTakeOver: boolean;
    // private compressCondition: (param0: Frame) => boolean;
    /*not mapped: */ getCompressCondition$ktor_websockets(): (param0: Frame) => boolean;
    compressionLevel: number;
    // private manualConfig: (param0: WebSocketExtensionHeader[]) => void;
    /*not mapped: */ getManualConfig$ktor_websockets(): (param0: WebSocketExtensionHeader[]) => void;
    maxInflatedFrameSize: number;
    serverNoContextTakeOver: boolean;
    build(): WebSocketExtensionHeader[];
    compressIf(block: (param0: Frame) => boolean): void;
    compressIfBiggerThan(bytes: number): void;
    configureProtocols(block: (param0: WebSocketExtensionHeader[]) => void): void;
}