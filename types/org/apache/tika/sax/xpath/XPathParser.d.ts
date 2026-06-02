import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Matcher } from '../../../../../org/apache/tika/sax/xpath/Matcher.d.ts'
export class XPathParser extends Object {
    constructor()
    constructor(arg0: string, arg1: string)
    // private prefixes: { [key: string]: string };
    addPrefix(arg0: string, arg1: string): void;
    parse(arg0: string): Matcher;
}