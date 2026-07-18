import type { Socket } from '../../../../io/ktor/network/sockets/Socket.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Connection extends Object {
    constructor(socket: Socket, input: ByteReadChannel, output: ByteWriteChannel)
    readonly input: ByteReadChannel;
    readonly output: ByteWriteChannel;
    readonly socket: Socket;
}