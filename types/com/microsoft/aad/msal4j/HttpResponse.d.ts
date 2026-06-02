import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpResponse extends Object implements IHttpResponse {
    constructor()
    // private body: string;
    // private headers: { [key: string]: string[] };
    // private statusCode: number;
    addHeader(arg0: string, arg1: string[]): void;
    addHeaders(arg0: { [key: string]: string[] }): void;
    body(): string;
    body(arg0: string): HttpResponse;
    getBodyAsMap(): { [key: string]: string };
    getHeader(arg0: string): string[];
    headers(): { [key: string]: string[] };
    statusCode(): number;
    statusCode(arg0: number): HttpResponse;
}