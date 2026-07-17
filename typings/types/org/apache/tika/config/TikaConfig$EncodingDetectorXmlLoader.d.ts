import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { TikaConfig$XmlLoader } from '../../../../org/apache/tika/config/TikaConfig$XmlLoader.d.ts'
import type { CompositeEncodingDetector } from '../../../../org/apache/tika/detect/CompositeEncodingDetector.d.ts'
import type { EncodingDetector } from '../../../../org/apache/tika/detect/EncodingDetector.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export class TikaConfig$EncodingDetectorXmlLoader extends TikaConfig$XmlLoader<EncodingDetector, EncodingDetector> {
    private constructor()
    createComposite(arg0: Class<EncodingDetector>, arg1: EncodingDetector[], arg2: Class<EncodingDetector>[], arg3: JavaMap<string, Param<Object>>, arg4: MimeTypes, arg5: ServiceLoader): EncodingDetector;
    createComposite(arg0: EncodingDetector[], arg1: MimeTypes, arg2: ServiceLoader): CompositeEncodingDetector;
    createDefault(arg0: MimeTypes, arg1: ServiceLoader): EncodingDetector;
    decorate(arg0: EncodingDetector, arg1: Element): EncodingDetector;
    getLoaderClass(): Class<EncodingDetector>;
    getLoaderTagName(): string;
    getParentTagName(): string;
    isComposite(arg0: Class<EncodingDetector>): boolean;
    isComposite(arg0: EncodingDetector): boolean;
    preLoadOne(arg0: Class<EncodingDetector>, arg1: string, arg2: MimeTypes): EncodingDetector;
    supportsComposite(): boolean;
}