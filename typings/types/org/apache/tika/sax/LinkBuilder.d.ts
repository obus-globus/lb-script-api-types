import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Link } from '../../../../org/apache/tika/sax/Link.d.ts'
export class LinkBuilder extends Object {
    constructor(arg0: string)
    readonly rel: string;
    // private text: StringBuilder;
    readonly title: string;
    readonly type: string;
    // private uri: string;
    characters(arg0: string[], arg1: number, arg2: number): void;
    getLink(): Link;
    getLink(arg0: boolean): Link;
    getType(): string;
    setRel(arg0: string): void;
    setTitle(arg0: string): void;
    setURI(arg0: string): void;
}