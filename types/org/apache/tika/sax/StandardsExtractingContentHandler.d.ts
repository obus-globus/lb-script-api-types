import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class StandardsExtractingContentHandler extends ContentHandlerDecorator {
    static STANDARD_REFERENCES: string;
    constructor()
    constructor(arg0: ContentHandler, arg1: Metadata)
    readonly maxBufferLength: number;
    // private metadata: Metadata;
    // private stringBuilder: StringBuilder;
    readonly threshold: number;
    characters(arg0: string[], arg1: number, arg2: number): void;
    endDocument(): void;
    getThreshold(): number;
    setMaxBufferLength(arg0: number): void;
    setThreshold(arg0: number): void;
}