import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
import type { Locator } from '../../../../org/xml/sax/Locator.d.ts'
import type { DefaultHandler } from '../../../../org/xml/sax/helpers/DefaultHandler.d.ts'
export class DIFContentHandler extends DefaultHandler {
    constructor(arg0: ContentHandler, arg1: Metadata)
    // private dataStack: string[];
    // private delegate: ContentHandler;
    // private isLeaf: boolean;
    // private metadata: Metadata;
    // private treeStack: string[];
    characters(arg0: string[], arg1: number, arg2: number): void;
    endDocument(): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    setDocumentLocator(arg0: Locator): void;
    startDocument(): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
    toString(): string;
}