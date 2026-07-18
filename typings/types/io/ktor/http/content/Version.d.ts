import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { HeadersBuilder } from '../../../../io/ktor/http/HeadersBuilder.d.ts'
import type { VersionCheckResult } from '../../../../io/ktor/http/content/VersionCheckResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Version extends Object{
    appendHeadersTo(builder: HeadersBuilder): void;
    check(requestHeaders: Headers): VersionCheckResult;
}