import type { Object } from '../../../java/lang/Object.d.ts'
export class HttpMethod extends Object {
    static INSTANCE: HttpMethod;
    static invalidatesCache(method: string): boolean;
    static permitsRequestBody(method: string): boolean;
    static requiresRequestBody(method: string): boolean;
    invalidatesCache(method: string): boolean;
    isCacheable(requestMethod: string): boolean;
    permitsRequestBody(method: string): boolean;
    redirectsToGet(method: string): boolean;
    redirectsWithBody(method: string): boolean;
    requiresRequestBody(method: string): boolean;
}