import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class BodyContentHandler extends ContentHandlerDecorator {
    constructor()
    constructor(arg0: Writer)
    constructor(arg0: number)
    constructor(arg0: ContentHandler)
}