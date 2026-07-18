import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { CompressedFileType } from '../../../../../io/ktor/server/http/content/CompressedFileType.d.ts'
import type { FileSystemPaths } from '../../../../../io/ktor/server/http/content/FileSystemPaths.d.ts'
import type { StaticContentConfig } from '../../../../../io/ktor/server/http/content/StaticContentConfig.d.ts'
import type { Route } from '../../../../../io/ktor/server/routing/Route.d.ts'
import type { AttributeKey } from '../../../../../io/ktor/util/AttributeKey.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StaticContentKt extends Object {
    static default(self: Route, localPath: File): void;
    static default(self: Route, localPath: string): void;
    static defaultResource(self: Route, resource: string, resourcePackage: string | null): void;
    static file(self: Route, remotePath: string, localPath: File): void;
    static file(self: Route, remotePath: string, localPath: string): void;
    static files(self: Route, folder: File): void;
    static files(self: Route, folder: string): void;
    static getStaticBasePackage(paramarg0: Route): string;
    static getStaticFileLocationProperty(): AttributeKey<string>;
    static getStaticRootFolder(paramarg0: Route): File;
    static isStaticContent(self: ApplicationCall): boolean;
    static preCompressed(self: Route, types: CompressedFileType[], configure: (param0: Route) => void): void;
    static resource(self: Route, remotePath: string, resource: string, resourcePackage: string | null): void;
    static resources(self: Route, resourcePackage: string | null): void;
    static setStaticBasePackage(paramarg0: Route, paramarg1: string): void;
    static setStaticRootFolder(paramarg0: Route, paramarg1: File): void;
    static static(self: Route, remotePath: string, configure: (param0: Route) => void): Route;
    static static(self: Route, configure: (param0: Route) => void): Route;
    static staticFileSystem(self: Route, remotePath: string, basePath: string | null, index: string | null, fileSystem: FileSystemPaths, block: (param0: StaticContentConfig<Path>) => void): Route;
    static staticFiles(self: Route, remotePath: string, dir: File, index: string | null, block: (param0: StaticContentConfig<File>) => void): Route;
    static staticResources(self: Route, remotePath: string, basePackage: string | null, index: string | null, block: (param0: StaticContentConfig<URL>) => void): Route;
    static staticZip(self: Route, remotePath: string, basePath: string | null, zip: Path, index: string | null, block: (param0: StaticContentConfig<Path>) => void): Route;
}