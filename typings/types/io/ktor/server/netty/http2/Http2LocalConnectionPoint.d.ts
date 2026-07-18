import type { HttpMethod } from '../../../../../io/ktor/http/HttpMethod.d.ts'
import type { RequestConnectionPoint } from '../../../../../io/ktor/http/RequestConnectionPoint.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2LocalConnectionPoint extends Object implements RequestConnectionPoint {
    constructor(nettyHeaders: (Object | null)[], localNetworkAddress: InetSocketAddress | null, remoteNetworkAddress: InetSocketAddress | null)
    // private /*not mapped: */ getDefaultPort(): number;
    readonly host: string;
    readonly localAddress: string;
    readonly localHost: string;
    // private localNetworkAddress: InetSocketAddress | null;
    readonly localPort: number;
    readonly method: HttpMethod;
    // private nettyHeaders: (Object | null)[];
    readonly port: number;
    readonly remoteAddress: string;
    readonly remoteHost: string;
    // private remoteNetworkAddress: InetSocketAddress | null;
    readonly remotePort: number;
    readonly scheme: string;
    readonly serverHost: string;
    readonly serverPort: number;
    readonly uri: string;
    readonly version: string;
    toString(): string;
}