import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
import type { InputSource } from '../../../../org/xml/sax/InputSource.d.ts'
export class OfflineContentHandler extends ContentHandlerDecorator {
    constructor(arg0: ContentHandler)
    resolveEntity(arg0: string, arg1: string): InputSource;
}