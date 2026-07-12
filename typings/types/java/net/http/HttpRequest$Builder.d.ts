import type { URI } from '../../../java/net/URI.d.ts'
import type { HttpClient$Version } from '../../../java/net/http/HttpClient$Version.d.ts'
import type { HttpRequest } from '../../../java/net/http/HttpRequest.d.ts'
import type { HttpRequest$BodyPublisher } from '../../../java/net/http/HttpRequest$BodyPublisher.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpRequest$Builder extends Object{
    DELETE(): HttpRequest$Builder;
    GET(): HttpRequest$Builder;
    HEAD(): HttpRequest$Builder;
    POST(arg0: HttpRequest$BodyPublisher): HttpRequest$Builder;
    PUT(arg0: HttpRequest$BodyPublisher): HttpRequest$Builder;
    build(): HttpRequest;
    copy(): HttpRequest$Builder;
    expectContinue(arg0: boolean): HttpRequest$Builder;
    header(arg0: string, arg1: string): HttpRequest$Builder;
    headers(...arg0: string[]): HttpRequest$Builder;
    method(arg0: string, arg1: HttpRequest$BodyPublisher): HttpRequest$Builder;
    setHeader(arg0: string, arg1: string): HttpRequest$Builder;
    timeout(arg0: Duration): HttpRequest$Builder;
    uri(arg0: URI): HttpRequest$Builder;
    version(arg0: HttpClient$Version): HttpRequest$Builder;
}