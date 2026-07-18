import type { CacheControl } from '../../../../io/ktor/http/CacheControl.d.ts'
import type { HeadersBuilder } from '../../../../io/ktor/http/HeadersBuilder.d.ts'
import type { RangeUnits } from '../../../../io/ktor/http/RangeUnits.d.ts'
import type { ApplicationResponse } from '../../../../io/ktor/server/response/ApplicationResponse.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationResponsePropertiesKt extends Object {
    static cacheControl(self: HeadersBuilder, value: CacheControl): void;
    static cacheControl(self: ApplicationResponse, value: CacheControl): void;
    static contentRange(self: HeadersBuilder, range: { start: number; endInclusive: number; step: number } | null, fullLength: number | null, unit: string): void;
    static contentRange(self: ApplicationResponse, range: { start: number; endInclusive: number; step: number } | null, fullLength: number | null, unit: RangeUnits): void;
    static contentRange(self: ApplicationResponse, range: { start: number; endInclusive: number; step: number } | null, fullLength: number | null, unit: string): void;
    static etag(self: ApplicationResponse, value: string): void;
    static header(self: ApplicationResponse, name: string, value: number): void;
    static header(self: ApplicationResponse, name: string, value: string): void;
}