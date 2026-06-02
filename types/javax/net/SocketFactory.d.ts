import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { Socket } from '../../java/net/Socket.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class SocketFactory extends Object {
    static getDefault(): SocketFactory;
    constructor()
    createSocket(): Socket;
    createSocket(arg0: InetAddress, arg1: number): Socket;
    createSocket(arg0: InetAddress, arg1: number, arg2: InetAddress, arg3: number): Socket;
    createSocket(arg0: string, arg1: number): Socket;
    createSocket(arg0: string, arg1: number, arg2: InetAddress, arg3: number): Socket;
}