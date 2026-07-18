import type { HttpMethod } from '../../../../../io/ktor/http/HttpMethod.d.ts'
import type { CORSConfig$Companion } from '../../../../../io/ktor/server/plugins/cors/CORSConfig$Companion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CORSConfig extends Object {
    static CORS_DEFAULT_MAX_AGE: number;
    static Companion: CORSConfig$Companion;
    constructor()
    allowCredentials: boolean;
    allowNonSimpleContentTypes: boolean;
    allowSameOrigin: boolean;
    readonly exposedHeaders: string[];
    readonly headerPredicates: (param0: string) => boolean[];
    readonly headers: string[];
    readonly hosts: string[];
    maxAgeInSeconds: number;
    readonly methods: HttpMethod[];
    // private originPredicates: (param0: string) => boolean[];
    /*not mapped: */ getOriginPredicates$ktor_server_cors(): (param0: string) => boolean[];
    // private wildcardWithDot: string;
    // private addHost(host: string): void;
    allowHeader(header: string): void;
    allowHeaders(predicate: (param0: string) => boolean): void;
    allowHeadersPrefixed(headerPrefix: string): void;
    allowHost(host: string, schemes: string[], subDomains: string[]): void;
    allowMethod(method: HttpMethod): void;
    allowOrigins(predicate: (param0: string) => boolean): void;
    allowXHttpMethodOverride(): void;
    anyHost(): void;
    anyMethod(): void;
    exposeHeader(header: string): void;
    // private validateWildcardRequirements(host: string): void;
    // private wildcardInFrontOfDomain(host: string): boolean;
}