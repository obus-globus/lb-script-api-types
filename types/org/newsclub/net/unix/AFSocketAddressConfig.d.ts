import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketAddress$AFSocketAddressConstructor } from '../../../../org/newsclub/net/unix/AFSocketAddress$AFSocketAddressConstructor.d.ts'
export abstract class AFSocketAddressConfig<A extends AFSocketAddress> extends Object {
    constructor()
    addressConstructor(): (param0: A, param1: number, param2: number[]) => unknown;
    nullBindAddress(): SocketAddress;
    parseURI(arg0: URI, arg1: number): A;
    selectorProviderClassname(): string;
    uriSchemes(): string[];
}