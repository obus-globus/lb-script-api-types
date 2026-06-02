import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { ServerSocket } from '../../java/net/ServerSocket.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ServerSocketFactory extends Object {
    static getDefault(): ServerSocketFactory;
    constructor()
    createServerSocket(): ServerSocket;
    createServerSocket(arg0: number): ServerSocket;
    createServerSocket(arg0: number, arg1: number): ServerSocket;
    createServerSocket(arg0: number, arg1: number, arg2: InetAddress): ServerSocket;
}