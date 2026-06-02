import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { DefaultHandler } from '../../../../org/xml/sax/helpers/DefaultHandler.d.ts'
export class ToTextContentHandler extends DefaultHandler {
    constructor()
    constructor(arg0: OutputStream, arg1: string)
    constructor(arg0: Writer)
    // private scriptDepth: number;
    // private styleDepth: number;
    // private writer: Writer;
    characters(arg0: string[], arg1: number, arg2: number): void;
    endDocument(): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
    toString(): string;
}