import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { TikaConfig$XmlLoader } from '../../../../org/apache/tika/config/TikaConfig$XmlLoader.d.ts'
import type { EncodingDetector } from '../../../../org/apache/tika/detect/EncodingDetector.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { CompositeParser } from '../../../../org/apache/tika/parser/CompositeParser.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { Renderer } from '../../../../org/apache/tika/renderer/Renderer.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export class TikaConfig$ParserXmlLoader extends TikaConfig$XmlLoader<CompositeParser, Parser> {
    private constructor(arg0: EncodingDetector, arg1: Renderer)
    // private encodingDetector: EncodingDetector;
    // private renderer: Renderer;
    createComposite(arg0: Class<Parser>, arg1: Parser[], arg2: Class<Parser>[], arg3: JavaMap<string, Param<Object>>, arg4: MimeTypes, arg5: ServiceLoader): Parser;
    createComposite(arg0: Parser[], arg1: MimeTypes, arg2: ServiceLoader): CompositeParser;
    createDefault(arg0: MimeTypes, arg1: ServiceLoader): CompositeParser;
    decorate(arg0: Parser, arg1: Element): Parser;
    getLoaderClass(): Class<Parser>;
    getLoaderTagName(): string;
    getParentTagName(): string;
    isComposite(arg0: Class<Parser>): boolean;
    isComposite(arg0: Parser): boolean;
    newInstance(arg0: Class<Parser>): Parser;
    preLoadOne(arg0: Class<Parser>, arg1: string, arg2: MimeTypes): Parser;
    supportsComposite(): boolean;
}