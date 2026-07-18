import type { WebsocketContentConverter } from '../../../../io/ktor/serialization/WebsocketContentConverter.d.ts'
import type { WebSocketChannelsConfig } from '../../../../io/ktor/websocket/WebSocketChannelsConfig.d.ts'
import type { WebSocketExtensionsConfig } from '../../../../io/ktor/websocket/WebSocketExtensionsConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WebSockets$WebSocketOptions extends Object {
    constructor()
    // private channelsConfig: WebSocketChannelsConfig;
    /*not mapped: */ getChannelsConfig$ktor_server_websockets(): WebSocketChannelsConfig;
    contentConverter: WebsocketContentConverter | null;
    // private extensionsConfig: WebSocketExtensionsConfig;
    /*not mapped: */ getExtensionsConfig$ktor_server_websockets(): WebSocketExtensionsConfig;
    masking: boolean;
    maxFrameSize: number;
    pingPeriodMillis: number;
    timeoutMillis: number;
    channels(block: (param0: WebSocketChannelsConfig) => void): void;
    extensions(block: (param0: WebSocketExtensionsConfig) => void): void;
}