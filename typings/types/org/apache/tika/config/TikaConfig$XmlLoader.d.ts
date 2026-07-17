import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export abstract class TikaConfig$XmlLoader<CT extends unknown, T extends unknown> extends Object {
    private constructor()
    createComposite(arg0: Class<T>, arg1: T[], arg2: Class<T>[], arg3: JavaMap<string, Param<Object>>, arg4: MimeTypes, arg5: ServiceLoader): T;
    createComposite(arg0: T[], arg1: MimeTypes, arg2: ServiceLoader): CT;
    createDefault(arg0: MimeTypes, arg1: ServiceLoader): CT;
    decorate(arg0: T, arg1: Element): T;
    getLoaderClass(): Class<T>;
    getLoaderTagName(): string;
    getParams(arg0: Element): JavaMap<string, Param<Object>>;
    getParentTagName(): string;
    isComposite(arg0: T): boolean;
    isComposite(arg0: Class<T>): boolean;
    loadOne(arg0: Element, arg1: MimeTypes, arg2: ServiceLoader): T;
    loadOverall(arg0: Element, arg1: MimeTypes, arg2: ServiceLoader): CT;
    newInstance(arg0: Class<T>): T;
    preLoadOne(arg0: Class<T>, arg1: string, arg2: MimeTypes): T;
    supportsComposite(): boolean;
}