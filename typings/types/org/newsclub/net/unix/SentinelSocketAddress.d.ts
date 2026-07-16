import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
export class SentinelSocketAddress extends AFSocketAddress {
    static canMap(paramarg0: SocketAddress): boolean;
    static canMap(paramarg0: SocketAddress, paramarg1: Class<AFSocketAddress>): boolean;
    static createUnresolved(paramarg0: string, paramarg1: number): InetSocketAddress;
    static mapOrFail<A extends AFSocketAddress>(paramarg0: SocketAddress, paramarg1: Class<A>): A;
    static mapOrFail(paramarg0: SocketAddress): AFSocketAddress;
    static of(paramarg0: URI): AFSocketAddress;
    static of(paramarg0: URI, paramarg1: number): AFSocketAddress;
    constructor(arg0: number)
    getFile(): File;
    hasFilename(): boolean;
}