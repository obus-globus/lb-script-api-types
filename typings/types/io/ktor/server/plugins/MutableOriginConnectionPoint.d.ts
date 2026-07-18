import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { RequestConnectionPoint } from '../../../../io/ktor/http/RequestConnectionPoint.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MutableOriginConnectionPoint extends Object implements RequestConnectionPoint {
    constructor(delegate: RequestConnectionPoint)
    // private delegate: RequestConnectionPoint;
    host: string;
    localAddress: string;
    localHost: string;
    localPort: number;
    method: HttpMethod;
    port: number;
    remoteAddress: string;
    remoteHost: string;
    remotePort: number;
    scheme: string;
    serverHost: string;
    serverPort: number;
    uri: string;
    version: string;
    toString(): string;
}