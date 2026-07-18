import type { WebSocketExtension } from '../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { WebSocketExtensionFactory } from '../../../io/ktor/websocket/WebSocketExtensionFactory.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WebSocketExtensionsConfig extends Object {
    constructor()
    // private installers: () => WebSocketExtension<Object>[];
    // private rcv: boolean[];
    build(): WebSocketExtension<Object>[];
    // private checkConflicts(extensionFactory: WebSocketExtensionFactory<Object, any>): void;
    install<ConfigType extends unknown>(extension: WebSocketExtensionFactory<ConfigType, any>, config: (param0: ConfigType) => void): void;
}