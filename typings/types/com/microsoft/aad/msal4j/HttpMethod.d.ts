import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class HttpMethod extends Enum<HttpMethod> {
    static CONNECT: HttpMethod;
    static DELETE: HttpMethod;
    static GET: HttpMethod;
    static HEAD: HttpMethod;
    static OPTIONS: HttpMethod;
    static POST: HttpMethod;
    static PUT: HttpMethod;
    static TRACE: HttpMethod;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HttpMethod;
    static values(): HttpMethod[];
    private constructor(arg2: string)
    methodName: string;
    name(): "CONNECT" | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "TRACE";
}