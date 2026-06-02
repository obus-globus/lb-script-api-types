import type { ClassResolver } from '../../../../../io/netty/handler/codec/serialization/ClassResolver.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClassLoaderClassResolver extends Object implements ClassResolver {
    constructor(arg0: ClassLoader)
    // private classLoader: ClassLoader;
    resolve(arg0: string): Class<Object>;
}