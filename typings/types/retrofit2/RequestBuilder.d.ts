import type { Class } from '../java/lang/Class.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { FormBody$Builder } from '../okhttp3/FormBody$Builder.d.ts'
import type { Headers$Builder } from '../okhttp3/Headers$Builder.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { HttpUrl$Builder } from '../okhttp3/HttpUrl$Builder.d.ts'
import type { MediaType } from '../okhttp3/MediaType.d.ts'
import type { MultipartBody$Builder } from '../okhttp3/MultipartBody$Builder.d.ts'
import type { MultipartBody$Part } from '../okhttp3/MultipartBody$Part.d.ts'
import type { Request$Builder } from '../okhttp3/Request$Builder.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
export class RequestBuilder extends Object {
    constructor(arg0: string, arg1: HttpUrl, arg2: string, arg3: Pair<string, string>[], arg4: MediaType, arg5: boolean, arg6: boolean, arg7: boolean)
    // private baseUrl: HttpUrl;
    // private body: RequestBody;
    // private contentType: MediaType;
    // private formBuilder: FormBody$Builder;
    // private hasBody: boolean;
    // private headersBuilder: Headers$Builder;
    // private method: string;
    // private multipartBuilder: MultipartBody$Builder;
    // private relativeUrl: string;
    // private requestBuilder: Request$Builder;
    // private urlBuilder: HttpUrl$Builder;
    addFormField(arg0: string, arg1: string, arg2: boolean): void;
    addHeader(arg0: string, arg1: string, arg2: boolean): void;
    addHeaders(arg0: Pair<string, string>[]): void;
    addPart(arg0: Pair<string, string>[], arg1: RequestBody): void;
    addPart(arg0: MultipartBody$Part): void;
    addPathParam(arg0: string, arg1: string, arg2: boolean): void;
    addQueryParam(arg0: string, arg1: string, arg2: boolean): void;
    addTag<T extends unknown>(arg0: Class<T>, arg1: T): void;
    get(): Request$Builder;
    setBody(arg0: RequestBody): void;
    setRelativeUrl(arg0: Object): void;
}