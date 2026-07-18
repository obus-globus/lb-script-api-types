import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationResponseFunctionsJvmKt extends Object {
    static respondFile(self: ApplicationCall, baseDir: File, fileName: string, configure: (param0: OutgoingContent) => void): void;
    static respondFile(self: ApplicationCall, file: File, configure: (param0: OutgoingContent) => void): void;
    static respondOutputStream(self: ApplicationCall, contentType: ContentType | null, status: HttpStatusCode | null, contentLength: number | null, producer: (param0: OutputStream) => void): void;
    static respondOutputStream(self: ApplicationCall, contentType: ContentType | null, status: HttpStatusCode | null, producer: (param0: OutputStream) => void): void;
    static respondPath(self: ApplicationCall, baseDir: Path, relativePath: Path, configure: (param0: OutgoingContent) => void): void;
    static respondPath(self: ApplicationCall, path: Path, configure: (param0: OutgoingContent) => void): void;
    static respondResource(self: ApplicationCall, resourcePath: string, resourcePackage: string, configure: (param0: OutgoingContent) => void): void;
    static respondResource(self: ApplicationCall, resourcePath: string, configure: (param0: OutgoingContent) => void): void;
    static respondTextWriter(self: ApplicationCall, contentType: ContentType | null, status: HttpStatusCode | null, contentLength: number | null, writer: (param0: Writer) => void): void;
    static respondTextWriter(self: ApplicationCall, contentType: ContentType | null, status: HttpStatusCode | null, writer: (param0: Writer) => void): void;
}