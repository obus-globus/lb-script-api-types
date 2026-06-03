import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { EncodingDetector } from '../../../../org/apache/tika/detect/EncodingDetector.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { MediaTypeRegistry } from '../../../../org/apache/tika/mime/MediaTypeRegistry.d.ts'
import type { CompositeParser } from '../../../../org/apache/tika/parser/CompositeParser.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { Renderer } from '../../../../org/apache/tika/renderer/Renderer.d.ts'
export class DefaultParser extends CompositeParser {
    constructor()
    constructor(arg0: ClassLoader)
    constructor(arg0: MediaTypeRegistry)
    constructor(arg0: MediaTypeRegistry, arg1: ClassLoader)
    constructor(arg0: MediaTypeRegistry, arg1: ServiceLoader)
    constructor(arg0: MediaTypeRegistry, arg1: ServiceLoader, arg2: E[])
    constructor(arg0: MediaTypeRegistry, arg1: ServiceLoader, arg2: E[], arg3: EncodingDetector, arg4: Renderer)
    constructor(arg0: MediaTypeRegistry, arg1: ServiceLoader, arg2: EncodingDetector, arg3: Renderer)
    // private loader: ServiceLoader;
    getAllComponentParsers(): Parser[];
    getParsers(): Map<MediaType, Parser>;
    getParsers(arg0: ParseContext): Map<MediaType, Parser>;
}