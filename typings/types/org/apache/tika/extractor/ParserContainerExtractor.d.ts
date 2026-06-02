import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TikaConfig } from '../../../../org/apache/tika/config/TikaConfig.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { ContainerExtractor } from '../../../../org/apache/tika/extractor/ContainerExtractor.d.ts'
import type { EmbeddedResourceHandler } from '../../../../org/apache/tika/extractor/EmbeddedResourceHandler.d.ts'
import type { TikaInputStream } from '../../../../org/apache/tika/io/TikaInputStream.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
export class ParserContainerExtractor extends Object implements ContainerExtractor {
    constructor()
    constructor(arg0: TikaConfig)
    constructor(arg0: Parser, arg1: Detector)
    // private detector: Detector;
    // private parser: Parser;
    extract(arg0: TikaInputStream, arg1: ContainerExtractor, arg2: EmbeddedResourceHandler): void;
    isSupported(arg0: TikaInputStream): boolean;
}