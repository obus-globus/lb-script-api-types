import type { HttpMethod } from '../../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { CorsConfig } from '../../../../../../io/netty/handler/codec/http/cors/CorsConfig.d.ts'
import type { CorsConfigBuilder } from '../../../../../../io/netty/handler/codec/http/cors/CorsConfigBuilder.d.ts'
import type { Callable } from '../../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class CorsConfig$Builder extends Object {
    constructor()
    constructor(arg0: string[])
    // private builder: CorsConfigBuilder;
    allowCredentials(): CorsConfig$Builder;
    allowNullOrigin(): CorsConfig$Builder;
    allowedRequestHeaders(arg0: string[]): CorsConfig$Builder;
    allowedRequestMethods(arg0: HttpMethod[]): CorsConfig$Builder;
    build(): CorsConfig;
    disable(): CorsConfig$Builder;
    exposeHeaders(arg0: string[]): CorsConfig$Builder;
    maxAge(arg0: number): CorsConfig$Builder;
    noPreflightResponseHeaders(): CorsConfig$Builder;
    preflightResponseHeader(arg0: CharSequence, arg1: Object[]): CorsConfig$Builder;
    preflightResponseHeader<T extends Object | number | string | boolean>(arg0: CharSequence, arg1: T[]): CorsConfig$Builder;
    preflightResponseHeader<T extends Object | number | string | boolean>(arg0: string, arg1: () => T): CorsConfig$Builder;
    shortCurcuit(): CorsConfig$Builder;
}