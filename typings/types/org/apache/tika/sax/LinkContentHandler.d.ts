import type { Link } from '../../../../org/apache/tika/sax/Link.d.ts'
import type { LinkBuilder } from '../../../../org/apache/tika/sax/LinkBuilder.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { DefaultHandler } from '../../../../org/xml/sax/helpers/DefaultHandler.d.ts'
export class LinkContentHandler extends DefaultHandler {
    constructor()
    constructor(arg0: boolean)
    // private builderStack: LinkBuilder[];
    // private collapseWhitespaceInAnchor: boolean;
    readonly links: Link[];
    characters(arg0: string[], arg1: number, arg2: number): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    getLinks(): Link[];
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
}