import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Process } from '../../../../../java/lang/Process.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TemporaryResources } from '../../../../../org/apache/tika/io/TemporaryResources.d.ts'
import type { TikaInputStream } from '../../../../../org/apache/tika/io/TikaInputStream.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../../org/apache/tika/parser/Parser.d.ts'
import type { ExternalParser$LineConsumer } from '../../../../../org/apache/tika/parser/external/ExternalParser$LineConsumer.d.ts'
import type { XHTMLContentHandler } from '../../../../../org/apache/tika/sax/XHTMLContentHandler.d.ts'
import type { ContentHandler } from '../../../../../org/xml/sax/ContentHandler.d.ts'
export class ExternalParser extends Object implements Parser {
    static INPUT_FILE_TOKEN: string;
    static OUTPUT_FILE_TOKEN: string;
    static check(paramarg0: string, ...paramarg1: number[]): boolean;
    static check(paramarg0: string[], ...paramarg1: number[]): boolean;
    constructor()
    readonly command: string[];
    readonly ignoredLineConsumer: ExternalParser$LineConsumer;
    // private metadataPatterns: Map<Pattern, string>;
    readonly supportedTypes: MediaType[];
    // private timeoutMs: number;
    // private extractMetadata(arg0: InputStream, arg1: Metadata): void;
    // private extractOutput(arg0: InputStream, arg1: XHTMLContentHandler): void;
    getCommand(): string[];
    getIgnoredLineConsumer(): ExternalParser$LineConsumer;
    getMetadataExtractionPatterns(): Map<Pattern, string>;
    getSupportedTypes(): MediaType[];
    getSupportedTypes(arg0: ParseContext): MediaType[];
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
    // private parse(arg0: TikaInputStream, arg1: XHTMLContentHandler, arg2: Metadata, arg3: TemporaryResources): void;
    // private sendInput(arg0: Process, arg1: InputStream): void;
    setCommand(...arg0: string[]): void;
    setIgnoredLineConsumer(arg0: ExternalParser$LineConsumer): void;
    setMetadataExtractionPatterns(arg0: Map<Pattern, string>): void;
    setSupportedTypes(arg0: MediaType[]): void;
}