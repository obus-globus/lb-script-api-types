import type { HttpMethod } from '../../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { CorsConfig$Builder } from '../../../../../../io/netty/handler/codec/http/cors/CorsConfig$Builder.d.ts'
import type { CorsConfigBuilder } from '../../../../../../io/netty/handler/codec/http/cors/CorsConfigBuilder.d.ts'
import type { Callable } from '../../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class CorsConfig extends Object {
    static withAnyOrigin(): CorsConfig$Builder;
    static withOrigin(paramarg0: string): CorsConfig$Builder;
    static withOrigins(...paramarg0: string[]): CorsConfig$Builder;
    constructor(arg0: CorsConfigBuilder)
    // private allowCredentials: boolean;
    // private allowNullOrigin: boolean;
    // private allowPrivateNetwork: boolean;
    // private allowedRequestHeaders: string[];
    // private allowedRequestMethods: HttpMethod[];
    // private anyOrigin: boolean;
    // private enabled: boolean;
    // private exposeHeaders: string[];
    // private maxAge: number;
    // private origins: string[];
    // private preflightHeaders: Map<CharSequence, () => Object | null>;
    readonly shortCircuit: boolean;
    allowedRequestHeaders(): string[];
    allowedRequestMethods(): HttpMethod[];
    exposedHeaders(): string[];
    isAnyOriginSupported(): boolean;
    isCorsSupportEnabled(): boolean;
    isCredentialsAllowed(): boolean;
    isNullOriginAllowed(): boolean;
    isPrivateNetworkAllowed(): boolean;
    isShortCircuit(): boolean;
    isShortCurcuit(): boolean;
    maxAge(): number;
    origin(): string;
    origins(): string[];
    preflightResponseHeaders(): Map$Entry<string, string>[];
    toString(): string;
}