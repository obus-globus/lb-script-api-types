import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { HttpMethod } from '../../../../../io/ktor/http/HttpMethod.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CORSConfig$Companion extends Object {
    CORS_DEFAULT_MAX_AGE: number;
    // private CorsDefaultMethods: HttpMethod[];
    /*not mapped: */ getCorsDefaultMethods(): HttpMethod[];
    // private CorsSimpleContentTypes: ContentType[];
    /*not mapped: */ getCorsSimpleContentTypes(): ContentType[];
    // private CorsSimpleRequestHeaders: string[];
    /*not mapped: */ getCorsSimpleRequestHeaders(): string[];
    // private CorsSimpleResponseHeaders: string[];
    /*not mapped: */ getCorsSimpleResponseHeaders(): string[];
    // private caseInsensitiveSet(...elements: string[]): string[];
}