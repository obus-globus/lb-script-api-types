import type { File } from '../../../../../../../java/io/File.d.ts'
import type { URL } from '../../../../../../../java/net/URL.d.ts'
import type { URLHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/URLHandler.d.ts'
import type { URLHandler$URLVisitor } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/URLHandler$URLVisitor.d.ts'
export class URLHandler$FileURLHandler extends URLHandler {
    static PROPNAME: string;
    static get(paramurl: URL): URLHandler;
    constructor(url: URL)
    // private file: File;
    guide(v: URLHandler$URLVisitor, recurse: boolean, strip: boolean): void;
    // private process(v: URLHandler$URLVisitor, recurse: boolean, strip: boolean, path: string, files: File[]): void;
}