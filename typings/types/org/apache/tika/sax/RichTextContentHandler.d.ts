import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { WriteOutContentHandler } from '../../../../org/apache/tika/sax/WriteOutContentHandler.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
export class RichTextContentHandler extends WriteOutContentHandler {
    constructor(arg0: Writer)
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
}