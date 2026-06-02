import type { File } from '../../../../java/io/File.d.ts'
import type { SocketFactory } from '../../../../javax/net/SocketFactory.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
import type { AFUNIXSocketFactory$DefaultSocketHostnameSocketFactory } from '../../../../org/newsclub/net/unix/AFUNIXSocketFactory$DefaultSocketHostnameSocketFactory.d.ts'
export class AFUNIXSocketFactory$FactoryArg extends AFUNIXSocketFactory$DefaultSocketHostnameSocketFactory {
    static getDefault(): SocketFactory;
    constructor(arg0: File)
    constructor(arg0: string)
    // private socketFile: File;
    addressFromHost(arg0: string, arg1: number): AFUNIXSocketAddress;
}