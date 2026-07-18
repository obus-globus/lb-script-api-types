import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { HeaderValue } from '../../../../io/ktor/http/HeaderValue.d.ts'
import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { RangesSpecifier } from '../../../../io/ktor/http/RangesSpecifier.d.ts'
import type { ApplicationRequest } from '../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationRequestPropertiesKt extends Object {
    static accept(self: ApplicationRequest): string | null;
    static acceptCharset(self: ApplicationRequest): string | null;
    static acceptCharsetItems(self: ApplicationRequest): HeaderValue[];
    static acceptEncoding(self: ApplicationRequest): string | null;
    static acceptEncodingItems(self: ApplicationRequest): HeaderValue[];
    static acceptItems(self: ApplicationRequest): HeaderValue[];
    static acceptLanguage(self: ApplicationRequest): string | null;
    static acceptLanguageItems(self: ApplicationRequest): HeaderValue[];
    static authorization(self: ApplicationRequest): string | null;
    static cacheControl(self: ApplicationRequest): string | null;
    static contentCharset(self: ApplicationRequest): Charset | null;
    static contentLength(self: ApplicationRequest): number | null;
    static contentType(self: ApplicationRequest): ContentType;
    static document(self: ApplicationRequest): string;
    static getHttpMethod(paramarg0: ApplicationRequest): HttpMethod;
    static getHttpVersion(paramarg0: ApplicationRequest): string;
    static getUri(paramarg0: ApplicationRequest): string;
    static header(self: ApplicationRequest, name: string): string | null;
    static host(self: ApplicationRequest): string;
    static isChunked(self: ApplicationRequest): boolean;
    static isMultipart(self: ApplicationRequest): boolean;
    static location(self: ApplicationRequest): string | null;
    static path(self: ApplicationRequest): string;
    static port(self: ApplicationRequest): number;
    static queryString(self: ApplicationRequest): string;
    static ranges(self: ApplicationRequest): RangesSpecifier | null;
    static userAgent(self: ApplicationRequest): string | null;
}