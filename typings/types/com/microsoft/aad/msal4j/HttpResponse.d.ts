import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpResponse extends Object implements IHttpResponse {
    constructor()
    // private body: string;
    // private headers: JavaMap<string, string[]>;
    // private statusCode: number;
    addHeader(arg0: string, ...arg1: string[]): void;
    addHeaders(arg0: JavaMap<string, string[]>): void;
    body(): string;
    body(arg0: string): HttpResponse;
    getBodyAsMap(): JavaMap<string, string>;
    getHeader(arg0: string): string[];
    headers(): JavaMap<string, string[]>;
    statusCode(): number;
    statusCode(arg0: number): HttpResponse;
}