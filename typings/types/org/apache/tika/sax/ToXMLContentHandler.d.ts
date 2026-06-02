import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { ToTextContentHandler } from '../../../../org/apache/tika/sax/ToTextContentHandler.d.ts'
import type { ToXMLContentHandler$ElementInfo } from '../../../../org/apache/tika/sax/ToXMLContentHandler$ElementInfo.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
export class ToXMLContentHandler extends ToTextContentHandler {
    constructor()
    constructor(arg0: OutputStream, arg1: string)
    constructor(arg0: string)
    // private currentElement: ToXMLContentHandler$ElementInfo;
    // private encoding: string;
    // private inStartElement: boolean;
    // private namespaces: { [key: string]: string };
    characters(arg0: string[], arg1: number, arg2: number): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    // private lazyCloseStartElement(): void;
    startDocument(): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
    startPrefixMapping(arg0: string, arg1: string): void;
    write(arg0: string): void;
    write(arg0: string): void;
    // private writeCharsAndEntity(arg0: string[], arg1: number, arg2: number, arg3: string): number;
    // private writeEscaped(arg0: string[], arg1: number, arg2: number, arg3: boolean): void;
}