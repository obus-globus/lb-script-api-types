import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { SafeContentHandler } from '../../../../org/apache/tika/sax/SafeContentHandler.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
import type { AttributesImpl } from '../../../../org/xml/sax/helpers/AttributesImpl.d.ts'
export class XHTMLContentHandler extends SafeContentHandler {
    static ENDLINE: string[];
    static XHTML: string;
    constructor(arg0: ContentHandler, arg1: Metadata)
    // private documentStarted: boolean;
    // private headEnded: boolean;
    // private headStarted: boolean;
    // private metadata: Metadata;
    // private useFrameset: boolean;
    characters(arg0: string[], arg1: number, arg2: number): void;
    characters(arg0: string): void;
    element(arg0: string, arg1: string): void;
    endDocument(): void;
    endElement(arg0: string): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    isInvalid(arg0: number): boolean;
    // private lazyEndHead(arg0: boolean): void;
    // private lazyStartHead(): void;
    newline(): void;
    startDocument(): void;
    startElement(arg0: string): void;
    startElement(arg0: string, arg1: string, arg2: string): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
    startElement(arg0: string, arg1: AttributesImpl): void;
}