import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { ContentType$Companion } from '../../../io/ktor/http/ContentType$Companion.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FileContentTypeJvmKt extends Object {
    static defaultForFile(self: ContentType$Companion, file: File): ContentType;
    static defaultForPath(self: ContentType$Companion, path: Path): ContentType;
}