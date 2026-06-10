import type { ResourceLeakDetector } from '../../../io/netty/util/ResourceLeakDetector.d.ts'
import type { ResourceLeakDetectorFactory } from '../../../io/netty/util/ResourceLeakDetectorFactory.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ResourceLeakDetectorFactory$DefaultResourceLeakDetectorFactory extends ResourceLeakDetectorFactory {
    static instance(): ResourceLeakDetectorFactory;
    static setResourceLeakDetectorFactory(paramarg0: ResourceLeakDetectorFactory): void;
    constructor()
    // private customClassConstructor: Constructor<Object>;
    // private obsoleteCustomClassConstructor: Constructor<Object>;
    newResourceLeakDetector<T extends Object | number | string | boolean>(arg0: Class<T>): ResourceLeakDetector<T>;
    newResourceLeakDetector<T extends Object | number | string | boolean>(arg0: Class<T>, arg1: number): ResourceLeakDetector<T>;
    newResourceLeakDetector<T extends Object | number | string | boolean>(arg0: Class<T>, arg1: number, arg2: number): ResourceLeakDetector<T>;
}