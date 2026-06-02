import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LoaderUtil$UrlResource extends Object {
    constructor(classLoader: ClassLoader, url: URL)
    readonly classLoader: ClassLoader;
    readonly url: URL;
    equals(o: Object | null): boolean;
    getClassLoader(): ClassLoader;
    getUrl(): URL;
    hashCode(): number;
}