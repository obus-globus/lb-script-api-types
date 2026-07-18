import type { ApplicationPlugin } from '../../../../../../io/ktor/server/application/ApplicationPlugin.d.ts'
import type { WebSocketServerSession } from '../../../../../../io/ktor/server/websocket/WebSocketServerSession.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AuthPluginConfig } from '../../../../../../net/ccbluex/liquidbounce/integration/interop/middleware/AuthPluginConfig.d.ts'
export class AuthPluginKt extends Object {
    static getAuthPlugin(): ApplicationPlugin<AuthPluginConfig>;
    static isWebSocketAuthenticated(session: WebSocketServerSession, authCode: string): boolean;
}