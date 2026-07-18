import type { WebsocketContentConverter } from '../../../../io/ktor/serialization/WebsocketContentConverter.d.ts'
import type { WebSockets$Plugin } from '../../../../io/ktor/server/websocket/WebSockets$Plugin.d.ts'
import type { WebSocketChannelsConfig } from '../../../../io/ktor/websocket/WebSocketChannelsConfig.d.ts'
import type { WebSocketExtensionsConfig } from '../../../../io/ktor/websocket/WebSocketExtensionsConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CompletableJob } from '../../../../kotlinx/coroutines/CompletableJob.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class WebSockets extends Object implements CoroutineScope {
    static Plugin: WebSockets$Plugin;
    constructor(pingIntervalMillis: number, timeoutMillis: number, maxFrameSize: number, masking: boolean)
    readonly channelsConfig: WebSocketChannelsConfig;
    readonly contentConverter: WebsocketContentConverter | null;
    readonly coroutineContext: CoroutineContext;
    readonly extensionsConfig: WebSocketExtensionsConfig;
    readonly masking: boolean;
    readonly maxFrameSize: number;
    // private parent: CompletableJob;
    readonly pingIntervalMillis: number;
    readonly timeoutMillis: number;
    // private shutdown(): void;
}