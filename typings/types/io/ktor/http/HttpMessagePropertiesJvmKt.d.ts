import type { HttpMessage } from '../../../io/ktor/http/HttpMessage.d.ts'
import type { HttpMessageBuilder } from '../../../io/ktor/http/HttpMessageBuilder.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HttpMessagePropertiesJvmKt extends Object {
    static date(self: HttpMessage): Date | null;
    static expires(self: HttpMessage): Date | null;
    static expires(self: HttpMessageBuilder): Date | null;
    static ifModifiedSince(self: HttpMessageBuilder, date: Date): void;
    static lastModified(self: HttpMessage): Date | null;
    static lastModified(self: HttpMessageBuilder): Date | null;
}