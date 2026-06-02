import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { HttpMethod } from '../../../../../net/ccbluex/liquidbounce/api/core/HttpMethod.d.ts'
export class HttpException extends Exception {
    constructor(method: HttpMethod, url: string, code: number, content: string)
    readonly code: number;
    readonly content: string;
    readonly method: HttpMethod;
    readonly url: string;
}