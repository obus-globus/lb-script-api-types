import type { TikaInputStream } from '../../../../org/apache/tika/io/TikaInputStream.d.ts'
import type { ContentHandlerDecorator } from '../../../../org/apache/tika/sax/ContentHandlerDecorator.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
import type { SAXException } from '../../../../org/xml/sax/SAXException.d.ts'
export class SecureContentHandler extends ContentHandlerDecorator {
    constructor(arg0: ContentHandler, arg1: TikaInputStream)
    // private characterCount: number;
    // private currentDepth: number;
    // private maxDepth: number;
    // private maxPackageEntryDepth: number;
    // private packageEntryDepths: number[];
    // private ratio: number;
    // private stream: TikaInputStream;
    // private threshold: number;
    advance(arg0: number): void;
    characters(arg0: string[], arg1: number, arg2: number): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    // private getByteCount(): number;
    getMaximumCompressionRatio(): number;
    getMaximumDepth(): number;
    getMaximumPackageEntryDepth(): number;
    getOutputThreshold(): number;
    ignorableWhitespace(arg0: string[], arg1: number, arg2: number): void;
    setMaximumCompressionRatio(arg0: number): void;
    setMaximumDepth(arg0: number): void;
    setMaximumPackageEntryDepth(arg0: number): void;
    setOutputThreshold(arg0: number): void;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
    throwIfCauseOf(arg0: SAXException): void;
}