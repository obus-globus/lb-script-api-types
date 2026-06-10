import type { URI } from '../../../java/net/URI.d.ts'
import type { HttpClient$Version } from '../../../java/net/http/HttpClient$Version.d.ts'
import type { HttpHeaders } from '../../../java/net/http/HttpHeaders.d.ts'
import type { HttpRequest$BodyPublisher } from '../../../java/net/http/HttpRequest$BodyPublisher.d.ts'
import type { HttpRequest$Builder } from '../../../java/net/http/HttpRequest$Builder.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { BiPredicate } from '../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class HttpRequest extends Object {
    static newBuilder(): HttpRequest$Builder;
    static newBuilder(paramarg0: URI): HttpRequest$Builder;
    static newBuilder(paramarg0: HttpRequest, paramarg1: (param0: string, param1: string) => boolean): HttpRequest$Builder;
    constructor()
    bodyPublisher(): Optional<HttpRequest$BodyPublisher>;
    equals(arg0: Object | null): boolean;
    expectContinue(): boolean;
    hashCode(): number;
    headers(): HttpHeaders;
    method(): string;
    timeout(): Optional<Duration>;
    uri(): URI;
    version(): Optional<HttpClient$Version>;
}