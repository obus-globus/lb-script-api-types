import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { RequestConnectionPoint } from '../../../../io/ktor/http/RequestConnectionPoint.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OriginConnectionPoint extends Object implements RequestConnectionPoint {
    constructor(local: RequestConnectionPoint, hostHeaderValue: string | null)
    constructor(call: ApplicationCall)
    readonly host: string;
    // private hostHeaderValue: string | null;
    // private local: RequestConnectionPoint;
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
    toString(): string;
}