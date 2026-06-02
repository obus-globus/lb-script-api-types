import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { TikaConfig$XmlLoader } from '../../../../org/apache/tika/config/TikaConfig$XmlLoader.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { Renderer } from '../../../../org/apache/tika/renderer/Renderer.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export class TikaConfig$RendererXmlLoader extends TikaConfig$XmlLoader<Renderer, Renderer> {
    private constructor()
    createComposite(arg0: Class<Renderer>, arg1: Renderer[], arg2: Class<Renderer>[], arg3: { [key: string]: Param<Object> }, arg4: MimeTypes, arg5: ServiceLoader): Renderer;
    createComposite(arg0: Renderer[], arg1: MimeTypes, arg2: ServiceLoader): Renderer;
    createDefault(arg0: MimeTypes, arg1: ServiceLoader): Renderer;
    decorate(arg0: Renderer, arg1: Element): Renderer;
    getLoaderClass(): Class<Renderer>;
    getLoaderTagName(): string;
    getParentTagName(): string;
    isComposite(arg0: Class<Renderer>): boolean;
    isComposite(arg0: Renderer): boolean;
    preLoadOne(arg0: Class<Renderer>, arg1: string, arg2: MimeTypes): Renderer;
    supportsComposite(): boolean;
}