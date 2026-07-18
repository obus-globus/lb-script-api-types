import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { WebSocketExtensionFactory } from '../../../io/ktor/websocket/WebSocketExtensionFactory.d.ts'
import type { WebSocketExtensionHeader } from '../../../io/ktor/websocket/WebSocketExtensionHeader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WebSocketExtension<ConfigType extends unknown> extends Object{
    readonly factory: WebSocketExtensionFactory<ConfigType, WebSocketExtension<ConfigType>>;
    readonly protocols: WebSocketExtensionHeader[];
    clientNegotiation(negotiatedProtocols: WebSocketExtensionHeader[]): boolean;
    processIncomingFrame(frame: Frame): Frame;
    processOutgoingFrame(frame: Frame): Frame;
    serverNegotiation(requestedProtocols: WebSocketExtensionHeader[]): WebSocketExtensionHeader[];
}