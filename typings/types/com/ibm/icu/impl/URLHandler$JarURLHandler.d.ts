import type { URLHandler } from '../../../../com/ibm/icu/impl/URLHandler.d.ts'
import type { URLHandler$URLVisitor } from '../../../../com/ibm/icu/impl/URLHandler$URLVisitor.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { JarFile } from '../../../../java/util/jar/JarFile.d.ts'
export class URLHandler$JarURLHandler extends URLHandler {
    static PROPNAME: string;
    static get(paramarg0: URL): URLHandler;
    constructor(arg0: URL)
    // private jarFile: JarFile;
    // private prefix: string;
    guide(arg0: URLHandler$URLVisitor, arg1: boolean): void;
    guide(arg0: URLHandler$URLVisitor, arg1: boolean, arg2: boolean): void;
}