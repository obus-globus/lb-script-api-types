import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { ToXMLContentHandler } from '../../../../org/apache/tika/sax/ToXMLContentHandler.d.ts'
export class ToHTMLContentHandler extends ToXMLContentHandler {
    constructor()
    constructor(arg0: OutputStream, arg1: string)
    endElement(arg0: string, arg1: string, arg2: string): void;
    startDocument(): void;
}