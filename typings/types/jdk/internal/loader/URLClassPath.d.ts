import type { JavaMap } from '../../../JavaMap.d.ts'
import type { IOException } from '../../../java/io/IOException.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { URLStreamHandler } from '../../../java/net/URLStreamHandler.d.ts'
import type { URLStreamHandlerFactory } from '../../../java/net/URLStreamHandlerFactory.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Resource } from '../../../jdk/internal/loader/Resource.d.ts'
import type { URLClassPath$Loader } from '../../../jdk/internal/loader/URLClassPath$Loader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class URLClassPath extends Object {
    constructor(arg0: URL[])
    constructor(arg0: URL[], arg1: URLStreamHandlerFactory)
    constructor(arg0: string, arg1: boolean)
    // private closed: boolean;
    // private jarHandler: URLStreamHandler;
    // private lmap: JavaMap<string, URLClassPath$Loader>;
    // private loaders: URLClassPath$Loader[];
    // private path: URL[];
    // private unopenedUrls: URL[];
    addFile(arg0: string): void;
    addURL(arg0: URL): void;
    closeLoaders(): IOException[];
    findResource(arg0: string): URL;
    findResources(arg0: string): Enumeration<URL>;
    // private getLoader(arg0: URL): URLClassPath$Loader;
    // private getLoader(arg0: number): URLClassPath$Loader;
    getResource(arg0: string): Resource;
    getResources(arg0: string): Enumeration<Resource>;
    getURLs(): URL[];
    // private push(arg0: URL[]): void;
}