import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { LocalFileContent } from '../../../../../io/ktor/server/http/content/LocalFileContent.d.ts'
import type { LocalPathContent } from '../../../../../io/ktor/server/http/content/LocalPathContent.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LocalFileContentKt extends Object {
    static LocalFileContent(baseDir: File, relativePath: string, contentType: ContentType): LocalFileContent;
    static LocalFileContent(baseDir: Path, relativePath: Path, contentType: ContentType): LocalPathContent;
    static LocalPathContent(baseDir: Path, relativePath: Path, contentType: ContentType): LocalPathContent;
}