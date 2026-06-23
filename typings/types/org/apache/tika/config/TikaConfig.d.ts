import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { CompositeDetector } from '../../../../org/apache/tika/detect/CompositeDetector.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { EncodingDetector } from '../../../../org/apache/tika/detect/EncodingDetector.d.ts'
import type { Translator } from '../../../../org/apache/tika/language/translate/Translator.d.ts'
import type { MetadataFilter } from '../../../../org/apache/tika/metadata/filter/MetadataFilter.d.ts'
import type { MetadataListFilter } from '../../../../org/apache/tika/metadata/listfilter/MetadataListFilter.d.ts'
import type { MediaTypeRegistry } from '../../../../org/apache/tika/mime/MediaTypeRegistry.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { AutoDetectParserConfig } from '../../../../org/apache/tika/parser/AutoDetectParserConfig.d.ts'
import type { CompositeParser } from '../../../../org/apache/tika/parser/CompositeParser.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { Renderer } from '../../../../org/apache/tika/renderer/Renderer.d.ts'
import type { Document } from '../../../../org/w3c/dom/Document.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export class TikaConfig extends Object {
    static DEFAULT_MAX_JSON_STRING_FIELD_LENGTH: number;
    static MAX_JSON_STRING_FIELD_LENGTH_ELEMENT_NAME: string;
    static getDefaultConfig(): TikaConfig;
    static getMaxJsonStringFieldLength(): number;
    static mustNotBeEmpty(paramarg0: string, paramarg1: string): void;
    static mustNotBeEmpty(paramarg0: string, paramarg1: Path[][]): void;
    constructor()
    constructor(arg0: File)
    constructor(arg0: File, arg1: ServiceLoader)
    constructor(arg0: InputStream)
    constructor(arg0: ClassLoader)
    constructor(arg0: URL)
    constructor(arg0: URL, arg1: ClassLoader)
    constructor(arg0: URL, arg1: ServiceLoader)
    constructor(arg0: Path[])
    constructor(arg0: Path[], arg1: ServiceLoader)
    constructor(arg0: string)
    constructor(arg0: Document)
    constructor(arg0: Document, arg1: ServiceLoader)
    constructor(arg0: Element)
    constructor(arg0: Element, arg1: ClassLoader)
    private constructor(arg0: Element, arg1: ServiceLoader)
    readonly autoDetectParserConfig: AutoDetectParserConfig;
    readonly detector: CompositeDetector;
    readonly encodingDetector: EncodingDetector;
    readonly executorService: ExecutorService;
    readonly metadataFilter: MetadataFilter;
    readonly metadataListFilter: MetadataListFilter;
    // private mimeTypes: MimeTypes;
    readonly parser: CompositeParser;
    // private renderer: Renderer;
    readonly serviceLoader: ServiceLoader;
    readonly translator: Translator;
    getAutoDetectParserConfig(): AutoDetectParserConfig;
    getDetector(): Detector;
    getEncodingDetector(): EncodingDetector;
    getExecutorService(): ExecutorService;
    getMediaTypeRegistry(): MediaTypeRegistry;
    getMetadataFilter(): MetadataFilter;
    getMetadataListFilter(): MetadataListFilter;
    getMimeRepository(): MimeTypes;
    getParser(): Parser;
    getServiceLoader(): ServiceLoader;
    getTranslator(): Translator;
    // private setMaxJsonStringFieldLength(arg0: Element): void;
    // private updateXMLReaderUtils(arg0: Element): void;
}