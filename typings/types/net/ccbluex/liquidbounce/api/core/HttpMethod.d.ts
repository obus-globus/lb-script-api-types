import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HttpMethod extends Enum<HttpMethod> {
    static DELETE: HttpMethod;
    static GET: HttpMethod;
    static HEAD: HttpMethod;
    static PATCH: HttpMethod;
    static POST: HttpMethod;
    static PUT: HttpMethod;
    static getEntries(): HttpMethod[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HttpMethod;
    static values(): (Object | null)[];
    private constructor()
    name(): "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD";
}