import type { AttributeKey } from '../../../io/ktor/util/AttributeKey.d.ts'
import type { WebSocketExtension } from '../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WebSocketExtensionFactory<ConfigType extends unknown, ExtensionType extends WebSocketExtension<ConfigType>> extends Object {
    readonly key: AttributeKey<ExtensionType>;
    readonly rsv1: boolean;
    readonly rsv2: boolean;
    readonly rsv3: boolean;
    install(config: (param0: ConfigType) => void): ExtensionType;
}