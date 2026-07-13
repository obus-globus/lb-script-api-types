import type { Class } from '../java/lang/Class.d.ts'
import type { Method } from '../java/lang/reflect/Method.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { MediaType } from '../okhttp3/MediaType.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestFactory$Builder } from '../retrofit2/RequestFactory$Builder.d.ts'
export class RequestFactory extends Object {
    constructor(arg0: RequestFactory$Builder)
    // private baseUrl: HttpUrl;
    // private contentType: MediaType;
    // private hasBody: boolean;
    // private headers: Pair<string, string>[];
    // private httpMethod: string;
    // private isFormEncoded: boolean;
    // private isKotlinSuspendFunction: boolean;
    // private isMultipart: boolean;
    // private method: Method;
    // private parameterHandlers: ParameterHandler<Object>[];
    // private relativeUrl: string;
    // private service: Class<Object>;
    create(arg0: Object, arg1: Object[]): Request;
}