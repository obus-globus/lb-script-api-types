import type { HttpMethod } from '../../../../../io/ktor/http/HttpMethod.d.ts'
import type { RequestConnectionPoint } from '../../../../../io/ktor/http/RequestConnectionPoint.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ApplicationRequest } from '../../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
export class CORSUtilsKt extends Object {
    static accessControlAllowCredentials(self: ApplicationCall, allowCredentials: boolean): void;
    static accessControlAllowOrigin(self: ApplicationCall, origin: string, allowsAnyHost: boolean, allowCredentials: boolean): void;
    static accessControlMaxAge(self: ApplicationCall, maxAgeHeaderValue: string | null): void;
    static corsCheckCurrentMethod(self: ApplicationCall, methods: HttpMethod[]): boolean;
    static corsCheckOrigins(request: ApplicationRequest, origin: string, allowsAnyHost: boolean, hostsNormalized: string[], hostsWithWildcard: Pair<string, string>[], allowedHosts: string[], originPredicates: (param0: string) => boolean[]): boolean;
    static corsCheckRequestHeaders(requestHeaders: string[], allHeadersSet: string[], headerPredicates: (param0: string) => boolean[]): boolean;
    static corsCheckRequestMethod(self: ApplicationCall, methods: HttpMethod[]): boolean;
    static corsVary(self: ApplicationCall): void;
    static headerMatchesAPredicate(header: string, headerPredicates: (param0: string) => boolean[]): boolean;
    static isCorsPreflightRequest(self: ApplicationRequest): boolean;
    static isSameOrigin(origin: string, point: RequestConnectionPoint): boolean;
    static isValidOrigin(origin: string): boolean;
    static normalizeOrigin(origin: string): string;
    static respondCorsFailed(self: ApplicationCall): void;
}