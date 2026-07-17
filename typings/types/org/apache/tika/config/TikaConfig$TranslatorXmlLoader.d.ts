import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { TikaConfig$XmlLoader } from '../../../../org/apache/tika/config/TikaConfig$XmlLoader.d.ts'
import type { Translator } from '../../../../org/apache/tika/language/translate/Translator.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export class TikaConfig$TranslatorXmlLoader extends TikaConfig$XmlLoader<Translator, Translator> {
    private constructor()
    createComposite(arg0: Class<Translator>, arg1: Translator[], arg2: Class<Translator>[], arg3: JavaMap<string, Param<Object>>, arg4: MimeTypes, arg5: ServiceLoader): Translator;
    createComposite(arg0: Translator[], arg1: MimeTypes, arg2: ServiceLoader): Translator;
    createDefault(arg0: MimeTypes, arg1: ServiceLoader): Translator;
    decorate(arg0: Translator, arg1: Element): Translator;
    getLoaderClass(): Class<Translator>;
    getLoaderTagName(): string;
    getParentTagName(): string;
    isComposite(arg0: Class<Translator>): boolean;
    isComposite(arg0: Translator): boolean;
    preLoadOne(arg0: Class<Translator>, arg1: string, arg2: MimeTypes): Translator;
    supportsComposite(): boolean;
}