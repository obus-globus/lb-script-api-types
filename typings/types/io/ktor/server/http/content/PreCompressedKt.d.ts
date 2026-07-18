import type { CacheControl } from '../../../../../io/ktor/http/CacheControl.d.ts'
import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { HeaderValue } from '../../../../../io/ktor/http/HeaderValue.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { CompressedFileType } from '../../../../../io/ktor/server/http/content/CompressedFileType.d.ts'
import type { CompressedResource } from '../../../../../io/ktor/server/http/content/CompressedResource.d.ts'
import type { ETagProvider } from '../../../../../io/ktor/server/http/content/ETagProvider.d.ts'
import type { FileSystemPaths } from '../../../../../io/ktor/server/http/content/FileSystemPaths.d.ts'
import type { Route } from '../../../../../io/ktor/server/routing/Route.d.ts'
import type { AttributeKey } from '../../../../../io/ktor/util/AttributeKey.d.ts'
import type { GMTDate } from '../../../../../io/ktor/util/date/GMTDate.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
export class PreCompressedKt extends Object {
    static bestCompressionFit(file: File, acceptEncoding: HeaderValue[], compressedTypes: CompressedFileType[] | null): CompressedFileType | null;
    static bestCompressionFit(call: ApplicationCall, resource: string, packageName: string | null, acceptEncoding: HeaderValue[], compressedTypes: CompressedFileType[] | null, contentType: (param0: URL) => ContentType): CompressedResource | null;
    static bestCompressionFit(fileSystem: FileSystemPaths, path: Path, acceptEncoding: HeaderValue[], compressedTypes: CompressedFileType[] | null): Pair<Path, CompressedFileType> | null;
    static getCompressedKey(): AttributeKey<CompressedFileType[]>;
    static getStaticContentEncodedTypes(paramarg0: Route): CompressedFileType[];
    static respondStaticFile(self: ApplicationCall, requestedFile: File, compressedTypes: CompressedFileType[] | null, contentType: (param0: File) => ContentType, cacheControl: (param0: File) => CacheControl[], lastModified: (param0: File) => GMTDate | null, etag: ETagProvider, modify: (param0: File, param1: ApplicationCall) => void): void;
    static respondStaticPath(self: ApplicationCall, fileSystem: FileSystemPaths, requestedPath: Path, compressedTypes: CompressedFileType[] | null, contentType: (param0: Path) => ContentType, cacheControl: (param0: Path) => CacheControl[], modify: (param0: Path, param1: ApplicationCall) => void, lastModified: (param0: Path) => GMTDate | null, etag: ETagProvider): void;
    static respondStaticResource(self: ApplicationCall, requestedResource: string, packageName: string | null, compressedTypes: CompressedFileType[] | null, contentType: (param0: URL) => ContentType, cacheControl: (param0: URL) => CacheControl[], modifier: (param0: URL, param1: ApplicationCall) => void, lastModified: (param0: URL) => GMTDate | null, etag: ETagProvider, exclude: (param0: URL) => boolean): void;
}