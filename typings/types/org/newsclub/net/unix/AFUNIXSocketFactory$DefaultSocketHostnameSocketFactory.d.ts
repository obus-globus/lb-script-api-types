import type { SocketFactory } from '../../../../javax/net/SocketFactory.d.ts'
import type { AFUNIXSocketFactory } from '../../../../org/newsclub/net/unix/AFUNIXSocketFactory.d.ts'
export abstract class AFUNIXSocketFactory$DefaultSocketHostnameSocketFactory extends AFUNIXSocketFactory {
    static getDefault(): SocketFactory;
    constructor()
    isHostnameSupported(arg0: string): boolean;
}