import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { HeadersBuilder } from '../../../../io/ktor/http/HeadersBuilder.d.ts'
import type { Version } from '../../../../io/ktor/http/content/Version.d.ts'
import type { VersionCheckResult } from '../../../../io/ktor/http/content/VersionCheckResult.d.ts'
import type { GMTDate } from '../../../../io/ktor/util/date/GMTDate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LastModifiedVersion extends Object implements Version {
    constructor(lastModified: GMTDate)
    readonly lastModified: GMTDate;
    // private truncatedModificationDate: GMTDate;
    appendHeadersTo(builder: HeadersBuilder): void;
    check(requestHeaders: Headers): VersionCheckResult;
    component1(): GMTDate;
    copy(lastModified: GMTDate): LastModifiedVersion;
    equals(other: Object | null): boolean;
    hashCode(): number;
    ifModifiedSince(dates: GMTDate[]): boolean;
    ifUnmodifiedSince(dates: GMTDate[]): boolean;
    toString(): string;
}