import type { RuntimeException } from '../java/lang/RuntimeException.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Response } from '../retrofit2/Response.d.ts'
export class HttpException extends RuntimeException {
    constructor(arg0: Response<Object>)
    // private code: number;
    // private response: Response<Object>;
    code(): number;
    message(): string;
    response(): Response<Object>;
}