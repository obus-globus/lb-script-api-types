import type { DefaultSSLWebSocketServerFactory } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/server/DefaultSSLWebSocketServerFactory.d.ts'
import type { ByteChannel } from '../../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { SelectionKey } from '../../../../../../../java/nio/channels/SelectionKey.d.ts'
import type { SocketChannel } from '../../../../../../../java/nio/channels/SocketChannel.d.ts'
import type { ExecutorService } from '../../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { SSLContext } from '../../../../../../../javax/net/ssl/SSLContext.d.ts'
export class CustomSSLWebSocketServerFactory extends DefaultSSLWebSocketServerFactory {
    constructor(arg0: SSLContext, arg1: ExecutorService, arg2: string[], arg3: string[])
    constructor(arg0: SSLContext, arg1: string[], arg2: string[])
    // private enabledCiphersuites: string[];
    // private enabledProtocols: string[];
    wrapChannel(arg0: SocketChannel, arg1: SelectionKey): ByteChannel;
}