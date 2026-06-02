import type { ClassResolver } from '../../../../../io/netty/handler/codec/serialization/ClassResolver.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CachingClassResolver extends Object implements ClassResolver {
    constructor(arg0: ClassResolver, arg1: { [key: string]: Class<Object> })
    // private classCache: { [key: string]: Class<Object> };
    // private delegate: ClassResolver;
    resolve(arg0: string): Class<Object>;
}