import type { URLHandler$URLVisitor } from '../../../../com/ibm/icu/impl/URLHandler$URLVisitor.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class URLHandler extends Object {
    static PROPNAME: string;
    static get(paramarg0: URL): URLHandler;
    constructor()
    guide(arg0: URLHandler$URLVisitor, arg1: boolean): void;
    guide(arg0: URLHandler$URLVisitor, arg1: boolean, arg2: boolean): void;
}