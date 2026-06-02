import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { TikaConfig$XmlLoader } from '../../../../org/apache/tika/config/TikaConfig$XmlLoader.d.ts'
import type { CompositeDetector } from '../../../../org/apache/tika/detect/CompositeDetector.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export class TikaConfig$DetectorXmlLoader extends TikaConfig$XmlLoader<CompositeDetector, Detector> {
    private constructor()
    createComposite(arg0: Class<Detector>, arg1: Detector[], arg2: Class<Detector>[], arg3: { [key: string]: Param<Object> }, arg4: MimeTypes, arg5: ServiceLoader): Detector;
    createComposite(arg0: Detector[], arg1: MimeTypes, arg2: ServiceLoader): CompositeDetector;
    createDefault(arg0: MimeTypes, arg1: ServiceLoader): CompositeDetector;
    decorate(arg0: Detector, arg1: Element): Detector;
    getLoaderClass(): Class<Detector>;
    getLoaderTagName(): string;
    getParentTagName(): string;
    isComposite(arg0: Class<Detector>): boolean;
    isComposite(arg0: Detector): boolean;
    preLoadOne(arg0: Class<Detector>, arg1: string, arg2: MimeTypes): Detector;
    supportsComposite(): boolean;
}