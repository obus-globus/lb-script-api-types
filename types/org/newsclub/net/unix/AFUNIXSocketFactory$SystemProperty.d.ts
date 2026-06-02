import type { SocketFactory } from '../../../../javax/net/SocketFactory.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
import type { AFUNIXSocketFactory$DefaultSocketHostnameSocketFactory } from '../../../../org/newsclub/net/unix/AFUNIXSocketFactory$DefaultSocketHostnameSocketFactory.d.ts'
export class AFUNIXSocketFactory$SystemProperty extends AFUNIXSocketFactory$DefaultSocketHostnameSocketFactory {
    static getDefault(): SocketFactory;
    constructor()
    addressFromHost(arg0: string, arg1: number): AFUNIXSocketAddress;
}