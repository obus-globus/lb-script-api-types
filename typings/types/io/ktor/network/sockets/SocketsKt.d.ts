import type { AReadable } from '../../../../io/ktor/network/sockets/AReadable.d.ts'
import type { ASocket } from '../../../../io/ktor/network/sockets/ASocket.d.ts'
import type { AWritable } from '../../../../io/ktor/network/sockets/AWritable.d.ts'
import type { Connection } from '../../../../io/ktor/network/sockets/Connection.d.ts'
import type { ServerSocket } from '../../../../io/ktor/network/sockets/ServerSocket.d.ts'
import type { Socket } from '../../../../io/ktor/network/sockets/Socket.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SocketsKt extends Object {
    static awaitClosed(self: ASocket): void;
    static connection(self: Socket): Connection;
    static getPort(paramarg0: ServerSocket): number;
    static isClosed(paramarg0: ASocket): boolean;
    static openReadChannel(self: AReadable): ByteReadChannel;
    static openWriteChannel(self: AWritable, autoFlush: boolean): ByteWriteChannel;
}