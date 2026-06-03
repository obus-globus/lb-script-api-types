import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Socket } from '../../../java/net/Socket.d.ts'
import type { SocketFactory } from '../../../javax/net/SocketFactory.d.ts'
export abstract class SSLSocketFactory extends SocketFactory {
    static getDefault(): SocketFactory;
    constructor()
    createSocket(): Socket;
    createSocket(arg0: Socket, arg1: InputStream, arg2: boolean): Socket;
    createSocket(arg0: Socket, arg1: string, arg2: number, arg3: boolean): Socket;
    getDefaultCipherSuites(): string[];
    getSupportedCipherSuites(): string[];
}