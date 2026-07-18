import type { HeadersBuilder } from '../../../../io/ktor/http/HeadersBuilder.d.ts'
import type { ApplicationResponse } from '../../../../io/ktor/server/response/ApplicationResponse.d.ts'
import type { LocalDateTime } from '../../../../java/time/LocalDateTime.d.ts'
import type { ZonedDateTime } from '../../../../java/time/ZonedDateTime.d.ts'
import type { Temporal } from '../../../../java/time/temporal/Temporal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationResponsePropertiesJvmKt extends Object {
    static expires(self: HeadersBuilder, expires: LocalDateTime): void;
    static expires(self: ApplicationResponse, value: LocalDateTime): void;
    static header(self: ApplicationResponse, name: string, date: Temporal): void;
    static lastModified(self: HeadersBuilder, dateTime: ZonedDateTime): void;
    static lastModified(self: ApplicationResponse, dateTime: ZonedDateTime): void;
}