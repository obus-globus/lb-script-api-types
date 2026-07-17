import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectorServer$HttpRequest extends Object {
    constructor(remoteAddress: InetSocketAddress, method: string, uri: string, version: string)
    // private headers: JavaMap<string, string>;
    // private method: string;
    readonly remoteAddress: InetSocketAddress;
    // private uri: string;
    // private version: string;
    // private addHeader(name: string, value: string): void;
    // private getHeaders(): JavaMap<string, string>;
    // private getMethod(): Object;
    getRemoteAddress(): InetSocketAddress;
    // private getUri(): string;
    // private getVersion(): string;
}