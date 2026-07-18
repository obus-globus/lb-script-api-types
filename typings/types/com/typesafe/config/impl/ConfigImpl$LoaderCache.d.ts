import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Config } from '../../../../com/typesafe/config/Config.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigImpl$LoaderCache extends Object {
    constructor()
    // private cache: JavaMap<string, Config>;
    // private currentLoader: WeakReference<ClassLoader>;
    // private currentSystemProperties: Config;
    getOrElseUpdate(arg0: ClassLoader, arg1: string, arg2: () => Config): Config;
}