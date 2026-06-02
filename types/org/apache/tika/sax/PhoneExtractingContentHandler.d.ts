import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class PhoneExtractingContentHandler extends ContentHandlerDecorator {
    constructor()
    constructor(arg0: ContentHandler, arg1: Metadata)
    // private metadata: Metadata;
    // private stringBuilder: StringBuilder;
    characters(arg0: string[], arg1: number, arg2: number): void;
    endDocument(): void;
}