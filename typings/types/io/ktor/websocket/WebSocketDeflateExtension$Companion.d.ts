import type { AttributeKey } from '../../../io/ktor/util/AttributeKey.d.ts'
import type { WebSocketDeflateExtension } from '../../../io/ktor/websocket/WebSocketDeflateExtension.d.ts'
import type { WebSocketDeflateExtension$Config } from '../../../io/ktor/websocket/WebSocketDeflateExtension$Config.d.ts'
import type { WebSocketExtensionFactory } from '../../../io/ktor/websocket/WebSocketExtensionFactory.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WebSocketDeflateExtension$Companion extends Object implements WebSocketExtensionFactory<WebSocketDeflateExtension$Config, WebSocketDeflateExtension> {
    readonly key: AttributeKey<WebSocketDeflateExtension>;
    readonly rsv1: boolean;
    readonly rsv2: boolean;
    readonly rsv3: boolean;
    install(config: (param0: WebSocketDeflateExtension$Config) => void): WebSocketDeflateExtension;
}