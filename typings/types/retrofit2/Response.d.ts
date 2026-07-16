import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { Response as Response_2 } from '../okhttp3/Response.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
export class Response<T extends unknown> extends Object {
    static error<T extends unknown>(paramarg0: number, paramarg1: ResponseBody): Response<T>;
    static error<T extends unknown>(paramarg0: ResponseBody, paramarg1: Response_2): Response<T>;
    static success<T extends unknown>(paramarg0: T): Response<T>;
    static success<T extends unknown>(paramarg0: T, paramarg1: Pair<string, string>[]): Response<T>;
    static success<T extends unknown>(paramarg0: T, paramarg1: Response_2): Response<T>;
    static success<T extends unknown>(paramarg0: number, paramarg1: T): Response<T>;
    private constructor(arg0: Response_2, arg1: T, arg2: ResponseBody)
    // private body: T;
    // private errorBody: ResponseBody;
    // private rawResponse: Response_2;
    body(): T;
    code(): number;
    errorBody(): ResponseBody;
    headers(): Pair<string, string>[];
    isSuccessful(): boolean;
    message(): string;
    raw(): Response_2;
    toString(): string;
}