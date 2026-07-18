import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { OutgoingContent$ReadChannelContent } from '../../../../../io/ktor/http/content/OutgoingContent$ReadChannelContent.d.ts'
import type { Application } from '../../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
export class StaticContentResolutionKt extends Object {
    static extension(self: string): string;
    static findContainingJarFile(url: string): File | null;
    static resolveResource(self: ApplicationCall, path: string, resourcePackage: string | null, classLoader: ClassLoader, mimeResolve: (param0: string) => ContentType): OutgoingContent$ReadChannelContent | null;
    static resolveResource(self: Application, path: string, resourcePackage: string | null, classLoader: ClassLoader, mimeResolve: (param0: URL) => ContentType): Pair<URL, OutgoingContent$ReadChannelContent> | null;
    static resourceClasspathResource(url: URL, path: string, mimeResolve: (param0: URL) => ContentType): OutgoingContent$ReadChannelContent | null;
}