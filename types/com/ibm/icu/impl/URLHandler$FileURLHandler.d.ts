import type { URLHandler } from '../../../../com/ibm/icu/impl/URLHandler.d.ts'
import type { URLHandler$URLVisitor } from '../../../../com/ibm/icu/impl/URLHandler$URLVisitor.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
export class URLHandler$FileURLHandler extends URLHandler {
    static PROPNAME: string;
    static get(paramarg0: URL): URLHandler;
    constructor(arg0: URL)
    // private file: File;
    guide(arg0: URLHandler$URLVisitor, arg1: boolean, arg2: boolean): void;
    // private process(arg0: URLHandler$URLVisitor, arg1: boolean, arg2: boolean, arg3: string, arg4: File[]): void;
}