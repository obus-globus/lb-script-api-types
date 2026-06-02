import type { URL } from '../../../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { URLHandler$URLVisitor } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/URLHandler$URLVisitor.d.ts'
export abstract class URLHandler extends Object {
    static PROPNAME: string;
    static get(paramurl: URL): URLHandler;
    constructor()
    guide(visitor: URLHandler$URLVisitor, recurse: boolean): void;
    guide(visitor: URLHandler$URLVisitor, recurse: boolean, strip: boolean): void;
}