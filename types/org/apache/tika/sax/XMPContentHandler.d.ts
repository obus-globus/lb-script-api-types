import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { SafeContentHandler } from '../../../../org/apache/tika/sax/SafeContentHandler.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class XMPContentHandler extends SafeContentHandler {
    static RDF: string;
    static XMP: string;
    constructor(arg0: ContentHandler)
    // private prefix: string;
    // private uri: string;
    // private description(arg0: Metadata, arg1: string, arg2: string): void;
    endDescription(): void;
    endDocument(): void;
    metadata(arg0: Metadata): void;
    property(arg0: string, arg1: string): void;
    startDescription(arg0: string, arg1: string, arg2: string): void;
    startDocument(): void;
}