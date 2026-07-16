import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HttpMethod extends Enum<HttpMethod> {
    static DELETE: HttpMethod;
    static GET: HttpMethod;
    static HEAD: HttpMethod;
    static PATCH: HttpMethod;
    static POST: HttpMethod;
    static PUT: HttpMethod;
    static getEntries(): HttpMethod[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): HttpMethod;
    static values(): HttpMethod[];
    private constructor()
    name(): "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD";
}