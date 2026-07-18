import type { LastModifiedVersion } from '../../../../../io/ktor/http/content/LastModifiedVersion.d.ts'
import type { FileTime } from '../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { ZonedDateTime } from '../../../../../java/time/ZonedDateTime.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LastModifiedJavaTimeKt extends Object {
    static LastModifiedVersion(lastModified: FileTime): LastModifiedVersion;
    static LastModifiedVersion(lastModified: ZonedDateTime): LastModifiedVersion;
    static LastModifiedVersion(lastModified: number): LastModifiedVersion;
}