import type { URL } from '../../../../../../../java/net/URL.d.ts'
import type { JarFile } from '../../../../../../../java/util/jar/JarFile.d.ts'
import type { URLHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/URLHandler.d.ts'
import type { URLHandler$URLVisitor } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/URLHandler$URLVisitor.d.ts'
export class URLHandler$JarURLHandler extends URLHandler {
    static PROPNAME: string;
    static get(paramurl: URL): URLHandler;
    constructor(url: URL)
    // private jarFile: JarFile;
    // private prefix: string;
    guide(v: URLHandler$URLVisitor, recurse: boolean, strip: boolean): void;
}