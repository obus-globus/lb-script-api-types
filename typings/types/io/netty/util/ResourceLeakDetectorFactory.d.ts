import type { ResourceLeakDetector } from '../../../io/netty/util/ResourceLeakDetector.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ResourceLeakDetectorFactory extends Object {
    static instance(): ResourceLeakDetectorFactory;
    static setResourceLeakDetectorFactory(paramarg0: ResourceLeakDetectorFactory): void;
    constructor()
    newResourceLeakDetector<T extends unknown>(arg0: Class<T>): ResourceLeakDetector<T>;
    newResourceLeakDetector<T extends unknown>(arg0: Class<T>, arg1: number): ResourceLeakDetector<T>;
    newResourceLeakDetector<T extends unknown>(arg0: Class<T>, arg1: number, arg2: number): ResourceLeakDetector<T>;
}