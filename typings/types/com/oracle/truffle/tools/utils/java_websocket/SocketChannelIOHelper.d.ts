import type { WebSocketImpl } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketImpl.d.ts'
import type { WrappedByteChannel } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WrappedByteChannel.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SocketChannelIOHelper extends Object {
    static batch(paramarg0: WebSocketImpl, paramarg1: ByteChannel): boolean;
    static read(paramarg0: ByteBuffer, paramarg1: WebSocketImpl, paramarg2: ByteChannel): boolean;
    static readMore(paramarg0: ByteBuffer, paramarg1: WebSocketImpl, paramarg2: WrappedByteChannel): boolean;
    private constructor()
}