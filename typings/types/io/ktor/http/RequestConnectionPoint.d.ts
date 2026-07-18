import type { HttpMethod } from '../../../io/ktor/http/HttpMethod.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RequestConnectionPoint extends Object{
    readonly host: string;
    readonly localAddress: string;
    readonly localHost: string;
    readonly localPort: number;
    readonly method: HttpMethod;
    readonly port: number;
    readonly remoteAddress: string;
    readonly remoteHost: string;
    readonly remotePort: number;
    readonly scheme: string;
    readonly serverHost: string;
    readonly serverPort: number;
    readonly uri: string;
    readonly version: string;
}