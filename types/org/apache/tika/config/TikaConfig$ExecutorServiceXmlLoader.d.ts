import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConfigurableThreadPoolExecutor } from '../../../../org/apache/tika/concurrent/ConfigurableThreadPoolExecutor.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { TikaConfig$XmlLoader } from '../../../../org/apache/tika/config/TikaConfig$XmlLoader.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export class TikaConfig$ExecutorServiceXmlLoader extends TikaConfig$XmlLoader<ConfigurableThreadPoolExecutor, ConfigurableThreadPoolExecutor> {
    private constructor()
    createComposite(arg0: Class<ConfigurableThreadPoolExecutor>, arg1: ConfigurableThreadPoolExecutor[], arg2: Class<ConfigurableThreadPoolExecutor>[], arg3: { [key: string]: Param<Object> }, arg4: MimeTypes, arg5: ServiceLoader): ConfigurableThreadPoolExecutor;
    createComposite(arg0: ConfigurableThreadPoolExecutor[], arg1: MimeTypes, arg2: ServiceLoader): ConfigurableThreadPoolExecutor;
    createDefault(arg0: MimeTypes, arg1: ServiceLoader): ConfigurableThreadPoolExecutor;
    decorate(arg0: ConfigurableThreadPoolExecutor, arg1: Element): ConfigurableThreadPoolExecutor;
    getLoaderClass(): Class<ConfigurableThreadPoolExecutor>;
    getLoaderTagName(): string;
    getParentTagName(): string;
    isComposite(arg0: Class<ConfigurableThreadPoolExecutor>): boolean;
    isComposite(arg0: ConfigurableThreadPoolExecutor): boolean;
    loadOne(arg0: Element, arg1: MimeTypes, arg2: ServiceLoader): ConfigurableThreadPoolExecutor;
    preLoadOne(arg0: Class<ConfigurableThreadPoolExecutor>, arg1: string, arg2: MimeTypes): ConfigurableThreadPoolExecutor;
    supportsComposite(): boolean;
}