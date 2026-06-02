import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { TikaConfig } from '../../../../org/apache/tika/config/TikaConfig.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { TikaInputStream } from '../../../../org/apache/tika/io/TikaInputStream.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { AutoDetectParserConfig } from '../../../../org/apache/tika/parser/AutoDetectParserConfig.d.ts'
import type { CompositeParser } from '../../../../org/apache/tika/parser/CompositeParser.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { SecureContentHandler } from '../../../../org/apache/tika/sax/SecureContentHandler.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class AutoDetectParser extends CompositeParser {
    constructor()
    constructor(arg0: Parser[])
    constructor(arg0: TikaConfig)
    constructor(arg0: Detector)
    constructor(arg0: Detector, arg1: Parser[])
    readonly autoDetectParserConfig: AutoDetectParserConfig;
    readonly detector: Detector;
    // private createSecureContentHandler(arg0: ContentHandler, arg1: TikaInputStream, arg2: AutoDetectParserConfig): SecureContentHandler;
    // private decorateHandler(arg0: ContentHandler, arg1: Metadata, arg2: ParseContext, arg3: AutoDetectParserConfig): ContentHandler;
    getAutoDetectParserConfig(): AutoDetectParserConfig;
    getDetector(): Detector;
    // private initializeEmbeddedDocumentExtractor(arg0: Metadata, arg1: ParseContext): void;
    // private maybeSpool(arg0: TikaInputStream, arg1: AutoDetectParserConfig, arg2: Metadata): void;
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata): void;
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
    setAutoDetectParserConfig(arg0: AutoDetectParserConfig): void;
    setDetector(arg0: Detector): void;
}