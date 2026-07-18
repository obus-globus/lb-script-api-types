import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { BaseApplicationPlugin } from '../../../../io/ktor/server/application/BaseApplicationPlugin.d.ts'
import type { WebSockets } from '../../../../io/ktor/server/websocket/WebSockets.d.ts'
import type { WebSockets$WebSocketOptions } from '../../../../io/ktor/server/websocket/WebSockets$WebSocketOptions.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { WebSocketExtension } from '../../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WebSockets$Plugin extends Object implements BaseApplicationPlugin<Application, WebSockets$WebSocketOptions, WebSockets> {
    readonly EXTENSIONS_KEY: AttributeKey<WebSocketExtension<Object>[]>;
    readonly key: AttributeKey<WebSockets>;
    install(pipeline: Application, configure: (param0: WebSockets$WebSocketOptions) => void): WebSockets;
}