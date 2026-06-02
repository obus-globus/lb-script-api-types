import type { HttpMethod } from '../../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { CorsConfig } from '../../../../../../io/netty/handler/codec/http/cors/CorsConfig.d.ts'
import type { Callable } from '../../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class CorsConfigBuilder extends Object {
    static forAnyOrigin(): CorsConfigBuilder;
    static forOrigin(paramarg0: string): CorsConfigBuilder;
    static forOrigins(paramarg0: (Object | null)[]): CorsConfigBuilder;
    constructor()
    constructor(arg0: string[])
    // private allowCredentials: boolean;
    // private allowNullOrigin: boolean;
    // private allowPrivateNetwork: boolean;
    // private anyOrigin: boolean;
    // private enabled: boolean;
    // private exposeHeaders: string[];
    // private maxAge: number;
    // private noPreflightHeaders: boolean;
    // private origins: string[];
    // private preflightHeaders: Map<CharSequence, () => Object | null>;
    // private requestHeaders: string[];
    // private requestMethods: HttpMethod[];
    // private shortCircuit: boolean;
    allowCredentials(): CorsConfigBuilder;
    allowNullOrigin(): CorsConfigBuilder;
    allowPrivateNetwork(): CorsConfigBuilder;
    allowedRequestHeaders(arg0: CharSequence[]): CorsConfigBuilder;
    allowedRequestHeaders(arg0: string[]): CorsConfigBuilder;
    allowedRequestMethods(arg0: HttpMethod[]): CorsConfigBuilder;
    build(): CorsConfig;
    disable(): CorsConfigBuilder;
    exposeHeaders(arg0: CharSequence[]): CorsConfigBuilder;
    exposeHeaders(arg0: string[]): CorsConfigBuilder;
    maxAge(arg0: number): CorsConfigBuilder;
    noPreflightResponseHeaders(): CorsConfigBuilder;
    preflightResponseHeader(arg0: CharSequence, arg1: () => T): CorsConfigBuilder;
    preflightResponseHeader(arg0: CharSequence, arg1: Object[]): CorsConfigBuilder;
    preflightResponseHeader(arg0: CharSequence, arg1: T[]): CorsConfigBuilder;
    shortCircuit(): CorsConfigBuilder;
}