import type { LoaderOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/LoaderOptions.d.ts'
import type { Constructor } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Constructor.d.ts'
import type { SafeConstructor$ConstructUndefined } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/SafeConstructor$ConstructUndefined.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CustomClassLoaderConstructor extends Constructor {
    static undefinedConstructor: SafeConstructor$ConstructUndefined;
    constructor(arg0: Class<Object>, arg1: ClassLoader, arg2: LoaderOptions)
    constructor(arg0: ClassLoader, arg1: LoaderOptions)
    // private loader: ClassLoader;
    getClassForName(arg0: string): Class<Object>;
}