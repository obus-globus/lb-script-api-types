import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { TikaConfig } from '../../../../org/apache/tika/config/TikaConfig.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { EmbeddedDocumentExtractor } from '../../../../org/apache/tika/extractor/EmbeddedDocumentExtractor.d.ts'
import type { TikaInputStream } from '../../../../org/apache/tika/io/TikaInputStream.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { PasswordProvider } from '../../../../org/apache/tika/parser/PasswordProvider.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class EmbeddedDocumentUtil extends Object implements Serializable {
    static getEmbeddedDocumentExtractor(paramarg0: ParseContext): EmbeddedDocumentExtractor;
    static getStatelessParser(paramarg0: ParseContext): Parser;
    static recordEmbeddedStreamException(paramarg0: Throwable, paramarg1: Metadata): void;
    static recordException(paramarg0: Throwable, paramarg1: Metadata): void;
    static tryToFindExistingLeafParser(paramarg0: Class<Object>, paramarg1: ParseContext): Parser;
    constructor(arg0: ParseContext)
    // private context: ParseContext;
    readonly detector: Detector;
    // private embeddedDocumentExtractor: EmbeddedDocumentExtractor;
    readonly mimeTypes: MimeTypes;
    readonly tikaConfig: TikaConfig;
    getDetector(): Detector;
    // private getEmbeddedDocumentExtractor(): EmbeddedDocumentExtractor;
    getExtension(arg0: TikaInputStream, arg1: Metadata): string;
    getMimeTypes(): MimeTypes;
    getPasswordProvider(): PasswordProvider;
    getTikaConfig(): TikaConfig;
    parseEmbedded(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: boolean): void;
    shouldParseEmbedded(arg0: Metadata): boolean;
}