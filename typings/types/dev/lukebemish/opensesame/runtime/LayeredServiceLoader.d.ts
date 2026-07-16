import type { LayeredServiceLoader$SingleImplementation } from '../../../../dev/lukebemish/opensesame/runtime/LayeredServiceLoader$SingleImplementation.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { ClassValue } from '../../../../java/lang/ClassValue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LayeredServiceLoader<T extends unknown> extends Object {
    static of<T extends unknown>(paramarg0: Class<T>): LayeredServiceLoader<T>;
    static unique<T extends unknown>(...paramarg0: LayeredServiceLoader$SingleImplementation<T>[]): T[];
    private constructor(arg0: Class<T>)
    // private cache: Map<ClassLoader, WeakReference<LayeredServiceLoader$SingleImplementation<T>>>;
    // private providersValue: ClassValue<LayeredServiceLoader$SingleImplementation<T>>;
    // private service: Class<T>;
    at(arg0: Class<Object>): LayeredServiceLoader$SingleImplementation<T>;
}