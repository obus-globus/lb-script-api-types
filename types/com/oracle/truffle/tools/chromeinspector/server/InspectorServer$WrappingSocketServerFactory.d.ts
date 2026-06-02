import type { WebSocketAdapter } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketAdapter.d.ts'
import type { WebSocketImpl } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketImpl.d.ts'
import type { WebSocketServerFactory } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketServerFactory.d.ts'
import type { Draft } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft.d.ts'
import type { ByteChannel } from '../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { SelectionKey } from '../../../../../../java/nio/channels/SelectionKey.d.ts'
import type { SocketChannel } from '../../../../../../java/nio/channels/SocketChannel.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectorServer$WrappingSocketServerFactory extends Object implements WebSocketServerFactory {
    constructor(null_: InspectorServer$WrappingSocketServerFactory, delegate: WebSocketServerFactory)
    // private delegate: WebSocketServerFactory;
    close(): void;
    createWebSocket(wsa: WebSocketAdapter, draft: Draft): WebSocketImpl;
    createWebSocket(wsa: WebSocketAdapter, list: Draft[]): WebSocketImpl;
    wrapChannel(channel: SocketChannel, key: SelectionKey): ByteChannel;
}