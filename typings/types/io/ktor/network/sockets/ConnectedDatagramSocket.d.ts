import type { ABoundSocket } from '../../../../io/ktor/network/sockets/ABoundSocket.d.ts'
import type { AConnectedSocket } from '../../../../io/ktor/network/sockets/AConnectedSocket.d.ts'
import type { ASocket } from '../../../../io/ktor/network/sockets/ASocket.d.ts'
import type { DatagramReadWriteChannel } from '../../../../io/ktor/network/sockets/DatagramReadWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ConnectedDatagramSocket extends ABoundSocket, AConnectedSocket, ASocket, DatagramReadWriteChannel, Object{
    close(): void;
    dispose(): void;
}