import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { Cookie } from '../../../io/ktor/http/Cookie.d.ts'
import type { HeaderValue } from '../../../io/ktor/http/HeaderValue.d.ts'
import type { HttpMessage } from '../../../io/ktor/http/HttpMessage.d.ts'
import type { HttpMessageBuilder } from '../../../io/ktor/http/HttpMessageBuilder.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HttpMessagePropertiesKt extends Object {
    static cacheControl(self: HttpMessage): HeaderValue[];
    static charset(self: HttpMessage): Charset | null;
    static charset(self: HttpMessageBuilder): Charset | null;
    static contentLength(self: HttpMessage): number | null;
    static contentLength(self: HttpMessageBuilder): number | null;
    static contentType(self: HttpMessage): ContentType | null;
    static contentType(self: HttpMessageBuilder): ContentType | null;
    static contentType(self: HttpMessageBuilder, type: ContentType): void;
    static cookies(self: HttpMessageBuilder): Cookie[];
    static etag(self: HttpMessage): string | null;
    static etag(self: HttpMessageBuilder): string | null;
    static ifNoneMatch(self: HttpMessageBuilder, value: string): void;
    static maxAge(self: HttpMessageBuilder, seconds: number): void;
    static setCookie(self: HttpMessage): Cookie[];
    static splitSetCookieHeader(self: string): string[];
    static userAgent(self: HttpMessageBuilder, content: string): void;
    static vary(self: HttpMessage): string[] | null;
    static vary(self: HttpMessageBuilder): string[] | null;
}