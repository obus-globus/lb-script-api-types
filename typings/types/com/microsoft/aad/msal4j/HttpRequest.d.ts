import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { HttpMethod } from '../../../../com/microsoft/aad/msal4j/HttpMethod.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpRequest extends Object {
    constructor(arg0: HttpMethod, arg1: string)
    constructor(arg0: HttpMethod, arg1: string, arg2: string)
    constructor(arg0: HttpMethod, arg1: string, arg2: JavaMap<string, string>)
    constructor(arg0: HttpMethod, arg1: string, arg2: JavaMap<string, string>, arg3: string)
    // private body: string;
    // private headers: JavaMap<string, string>;
    // private httpMethod: HttpMethod;
    // private url: URL;
    body(): string;
    canEqual(arg0: Object): boolean;
    // private createUrlFromString(arg0: string): URL;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    headerValue(arg0: string): string;
    headers(): JavaMap<string, string>;
    httpMethod(): HttpMethod;
    url(): URL;
}