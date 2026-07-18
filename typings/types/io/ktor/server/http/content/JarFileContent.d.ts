import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { OutgoingContent$ReadChannelContent } from '../../../../../io/ktor/http/content/OutgoingContent$ReadChannelContent.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { JarEntry } from '../../../../../java/util/jar/JarEntry.d.ts'
import type { JarFile } from '../../../../../java/util/jar/JarFile.d.ts'
export class JarFileContent extends OutgoingContent$ReadChannelContent {
    constructor(jarFile: File, resourcePath: string, contentType: ContentType)
    constructor(zipFilePath: Path, resourcePath: string, contentType: ContentType)
    readonly contentLength: number | null;
    readonly contentType: ContentType;
    // private isFile: boolean;
    /*not mapped: */ isFile(): boolean;
    // private jar: JarFile;
    // private /*not mapped: */ getJar(): JarFile;
    // private jarEntry: JarEntry | null;
    // private /*not mapped: */ getJarEntry(): JarEntry | null;
    readonly jarFile: File;
    // private normalized: string;
    readonly resourcePath: string;
    readFrom(): ByteReadChannel;
    readFrom(range: { start: number; endInclusive: number; step: number }): ByteReadChannel;
}