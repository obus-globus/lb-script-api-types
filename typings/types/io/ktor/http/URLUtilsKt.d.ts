import type { ParametersBuilder } from '../../../io/ktor/http/ParametersBuilder.d.ts'
import type { URLBuilder } from '../../../io/ktor/http/URLBuilder.d.ts'
import type { Url } from '../../../io/ktor/http/Url.d.ts'
import type { Appendable } from '../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class URLUtilsKt extends Object {
    static URLBuilder(builder: URLBuilder): URLBuilder;
    static URLBuilder(url: Url): URLBuilder;
    static URLBuilder(urlString: string): URLBuilder;
    static Url(builder: URLBuilder): Url;
    static Url(urlString: string): Url;
    static appendUrlFullPath(self: Appendable, encodedPath: string, encodedQueryParameters: ParametersBuilder, trailingQuery: boolean): void;
    static appendUrlFullPath(self: Appendable, encodedPath: string, encodedQuery: string, trailingQuery: boolean): void;
    static appendUserAndPassword(self: StringBuilder, encodedUser: string | null, encodedPassword: string | null): void;
    static buildUrl(block: (param0: URLBuilder) => void): Url;
    static getFullPath(paramarg0: Url): string;
    static getHostWithPort(paramarg0: Url): string;
    static getHostWithPortIfSpecified(paramarg0: Url): string;
    static isAbsolutePath(paramarg0: URLBuilder): boolean;
    static isAbsolutePath(paramarg0: Url): boolean;
    static isRelativePath(paramarg0: URLBuilder): boolean;
    static isRelativePath(paramarg0: Url): boolean;
    static parseUrl(urlString: string): Url | null;
    static takeFrom(self: URLBuilder, url: URLBuilder): URLBuilder;
    static takeFrom(self: URLBuilder, url: Url): URLBuilder;
}