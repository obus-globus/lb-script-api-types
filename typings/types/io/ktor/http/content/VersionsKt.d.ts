import type { EntityTagVersion } from '../../../../io/ktor/http/content/EntityTagVersion.d.ts'
import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { Version } from '../../../../io/ktor/http/content/Version.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VersionsKt extends Object {
    static EntityTagVersion(spec: string): EntityTagVersion;
    static getVersionListProperty(): AttributeKey<Version[]>;
    static getVersions(paramarg0: OutgoingContent): Version[];
    static setVersions(paramarg0: OutgoingContent, paramarg1: Version[]): void;
}