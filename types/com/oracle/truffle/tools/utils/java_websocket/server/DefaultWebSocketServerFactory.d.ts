import type { WebSocketAdapter } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketAdapter.d.ts'
import type { WebSocketImpl } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketImpl.d.ts'
import type { WebSocketServerFactory } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketServerFactory.d.ts'
import type { Draft } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft.d.ts'
import type { SelectionKey } from '../../../../../../../java/nio/channels/SelectionKey.d.ts'
import type { SocketChannel } from '../../../../../../../java/nio/channels/SocketChannel.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DefaultWebSocketServerFactory extends Object implements WebSocketServerFactory {
    constructor()
    close(): void;
    createWebSocket(arg0: WebSocketAdapter, arg1: Draft): WebSocketImpl;
    createWebSocket(arg0: WebSocketAdapter, arg1: Draft[]): WebSocketImpl;
    wrapChannel(arg0: SocketChannel, arg1: SelectionKey): SocketChannel;
}