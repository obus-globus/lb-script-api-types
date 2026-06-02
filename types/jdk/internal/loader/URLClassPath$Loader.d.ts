import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { JarFile } from '../../../java/util/jar/JarFile.d.ts'
import type { Resource } from '../../../jdk/internal/loader/Resource.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class URLClassPath$Loader extends Object implements Closeable {
    constructor(arg0: URL)
    // private base: URL;
    // private jarfile: JarFile;
    close(): void;
    findResource(arg0: string): URL;
    getBaseURL(): URL;
    getClassPath(): URL[];
    getResource(arg0: string): Resource;
}