import type { Socket } from '../../../java/net/Socket.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BufferedSocket } from '../../../okhttp3/internal/connection/BufferedSocket.d.ts'
import type { Socket as Socket_2 } from '../../../okio/Socket.d.ts'
export class BufferedSocketKt extends Object {
    static asBufferedSocket(self: Socket): BufferedSocket;
    static asBufferedSocket(self: Socket_2): BufferedSocket;
}