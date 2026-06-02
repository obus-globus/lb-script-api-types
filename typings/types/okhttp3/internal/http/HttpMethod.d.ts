import type { Object } from '../../../java/lang/Object.d.ts'
export class HttpMethod extends Object {
    static INSTANCE: HttpMethod;
    static invalidatesCache(paramarg0: string): boolean;
    static permitsRequestBody(paramarg0: string): boolean;
    static requiresRequestBody(paramarg0: string): boolean;
    invalidatesCache(method: string): boolean;
    isCacheable(requestMethod: string): boolean;
    permitsRequestBody(method: string): boolean;
    redirectsToGet(method: string): boolean;
    redirectsWithBody(method: string): boolean;
    requiresRequestBody(method: string): boolean;
}