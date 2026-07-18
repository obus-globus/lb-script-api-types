import type { ABoundSocket } from '../../../../io/ktor/network/sockets/ABoundSocket.d.ts'
import type { ASocket } from '../../../../io/ktor/network/sockets/ASocket.d.ts'
import type { Acceptable } from '../../../../io/ktor/network/sockets/Acceptable.d.ts'
import type { Socket } from '../../../../io/ktor/network/sockets/Socket.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ServerSocket extends ABoundSocket, ASocket, Acceptable<Socket>, Object{
    close(): void;
    dispose(): void;
}