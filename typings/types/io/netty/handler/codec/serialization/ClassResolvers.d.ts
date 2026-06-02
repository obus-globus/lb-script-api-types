import type { ClassResolver } from '../../../../../io/netty/handler/codec/serialization/ClassResolver.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClassResolvers extends Object {
    static cacheDisabled(paramarg0: ClassLoader): ClassResolver;
    static softCachingConcurrentResolver(paramarg0: ClassLoader): ClassResolver;
    static softCachingResolver(paramarg0: ClassLoader): ClassResolver;
    static weakCachingConcurrentResolver(paramarg0: ClassLoader): ClassResolver;
    static weakCachingResolver(paramarg0: ClassLoader): ClassResolver;
    private constructor()
}