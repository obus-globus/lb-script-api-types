import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { Response as Response_2 } from '../okhttp3/Response.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
export class Response<T extends unknown> extends Object {
    static error(paramarg0: number, paramarg1: ResponseBody): Response<Object>;
    static error(paramarg0: ResponseBody, paramarg1: Response_2): Response<Object>;
    static success(paramarg0: Object | null): Response<Object>;
    static success(paramarg0: Object | null, paramarg1: Pair<string, string>[]): Response<Object>;
    static success(paramarg0: Object | null, paramarg1: Response_2): Response<Object>;
    static success(paramarg0: number, paramarg1: Object | null): Response<Object>;
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