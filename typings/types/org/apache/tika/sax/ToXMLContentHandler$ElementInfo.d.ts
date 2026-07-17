import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ToXMLContentHandler$ElementInfo extends Object {
    constructor(arg0: ToXMLContentHandler$ElementInfo, arg1: JavaMap<string, string>)
    // private namespaces: JavaMap<string, string>;
    // private parent: ToXMLContentHandler$ElementInfo;
    getPrefix(arg0: string): string;
    getQName(arg0: string, arg1: string): string;
}