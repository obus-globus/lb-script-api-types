import type { SocketFactory } from '../../../../javax/net/SocketFactory.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
import type { AFUNIXSocketFactory } from '../../../../org/newsclub/net/unix/AFUNIXSocketFactory.d.ts'
export class AFUNIXSocketFactory$URIScheme extends AFUNIXSocketFactory {
    static getDefault(): SocketFactory;
    constructor()
    addressFromHost(arg0: string, arg1: number): AFUNIXSocketAddress;
    isHostnameSupported(arg0: string): boolean;
}