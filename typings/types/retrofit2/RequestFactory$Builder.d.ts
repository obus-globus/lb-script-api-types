import type { Class } from '../java/lang/Class.d.ts'
import type { Method } from '../java/lang/reflect/Method.d.ts'
import type { Type } from '../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { MediaType } from '../okhttp3/MediaType.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestFactory } from '../retrofit2/RequestFactory.d.ts'
import type { Retrofit } from '../retrofit2/Retrofit.d.ts'
export class RequestFactory$Builder extends Object {
    constructor(arg0: Retrofit, arg1: Class<Object>, arg2: Method)
    // private contentType: MediaType;
    // private gotBody: boolean;
    // private gotField: boolean;
    // private gotPart: boolean;
    // private gotPath: boolean;
    // private gotQuery: boolean;
    // private gotQueryMap: boolean;
    // private gotQueryName: boolean;
    // private gotUrl: boolean;
    // private hasBody: boolean;
    // private headers: Pair<string, string>[];
    // private httpMethod: string;
    // private isFormEncoded: boolean;
    // private isKotlinSuspendFunction: boolean;
    // private isMultipart: boolean;
    // private method: Method;
    // private methodAnnotations: Annotation[];
    // private parameterAnnotationsArray: Annotation[][];
    // private parameterHandlers: ParameterHandler<Object>[];
    // private parameterTypes: Type[];
    // private relativeUrl: string;
    // private relativeUrlParamNames: string[];
    // private retrofit: Retrofit;
    // private service: Class<Object>;
    build(): RequestFactory;
    // private parseHeaders(arg0: string[], arg1: boolean): Pair<string, string>[];
    // private parseHttpMethodAndPath(arg0: string, arg1: string, arg2: boolean): void;
    // private parseMethodAnnotation(arg0: Annotation): void;
    // private parseParameter(arg0: number, arg1: Type, arg2: Annotation[], arg3: boolean): ParameterHandler<Object>;
    // private parseParameterAnnotation(arg0: number, arg1: Type, arg2: Annotation[], arg3: Annotation): ParameterHandler<Object>;
    // private validatePathName(arg0: number, arg1: string): void;
    // private validateResolvableType(arg0: number, arg1: Type): void;
}