import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { HeadersBuilder } from '../../../../io/ktor/http/HeadersBuilder.d.ts'
import type { EntityTagVersion$Companion } from '../../../../io/ktor/http/content/EntityTagVersion$Companion.d.ts'
import type { Version } from '../../../../io/ktor/http/content/Version.d.ts'
import type { VersionCheckResult } from '../../../../io/ktor/http/content/VersionCheckResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EntityTagVersion extends Object implements Version {
    static Companion: EntityTagVersion$Companion;
    constructor(etag: string, weak: boolean)
    readonly etag: string;
    // private normalized: string;
    // private opaque: string;
    readonly weak: boolean;
    appendHeadersTo(builder: HeadersBuilder): void;
    check(requestHeaders: Headers): VersionCheckResult;
    component1(): string;
    component2(): boolean;
    copy(etag: string, weak: boolean): EntityTagVersion;
    equals(other: Object | null): boolean;
    hashCode(): number;
    match(other: EntityTagVersion): boolean;
    match(givenMatchEtags: EntityTagVersion[]): VersionCheckResult;
    noneMatch(givenNoneMatchEtags: EntityTagVersion[]): VersionCheckResult;
    toString(): string;
    // private weakMatch(other: EntityTagVersion): boolean;
}