import type { HttpMethod } from '../../../io/ktor/http/HttpMethod.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HttpMethod$Companion extends Object {
    DefaultMethods: HttpMethod[];
    Delete: HttpMethod;
    Get: HttpMethod;
    Head: HttpMethod;
    Options: HttpMethod;
    Patch: HttpMethod;
    Post: HttpMethod;
    Put: HttpMethod;
    Query: HttpMethod;
    Trace: HttpMethod;
    getDefaultMethods(): HttpMethod[];
    getDelete(): HttpMethod;
    getGet(): HttpMethod;
    getHead(): HttpMethod;
    getOptions(): HttpMethod;
    getPatch(): HttpMethod;
    getPost(): HttpMethod;
    getPut(): HttpMethod;
    getTrace(): HttpMethod;
    parse(method: string): HttpMethod;
}