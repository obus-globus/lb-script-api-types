import type { URLBuilder } from '../../../io/ktor/http/URLBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class URLBuilderKt extends Object {
    static DEFAULT_PORT: number;
    static appendEncodedPathSegments(self: URLBuilder, ...components: string[]): URLBuilder;
    static appendEncodedPathSegments(self: URLBuilder, segments: string[]): URLBuilder;
    static appendPathSegments(self: URLBuilder, components: string[], encodeSlash: boolean): URLBuilder;
    static appendPathSegments(self: URLBuilder, segments: string[], encodeSlash: boolean): URLBuilder;
    static clone(self: URLBuilder): URLBuilder;
    static getAuthority(paramarg0: URLBuilder): string;
    static getEncodedPath(paramarg0: URLBuilder): string;
    static getEncodedUserAndPassword(paramarg0: URLBuilder): string;
    static path(self: URLBuilder, ...path: string[]): void;
    static pathComponents(self: URLBuilder, ...components: string[]): URLBuilder;
    static pathComponents(self: URLBuilder, components: string[]): URLBuilder;
    static set(self: URLBuilder, scheme: string | null, host: string | null, port: number | null, path: string | null, block: (param0: URLBuilder) => void): void;
    static setEncodedPath(paramarg0: URLBuilder, paramarg1: string): void;
}