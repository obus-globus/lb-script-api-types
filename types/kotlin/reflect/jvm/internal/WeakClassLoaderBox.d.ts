import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WeakClassLoaderBox extends Object {
    constructor(classLoader: ClassLoader)
    // private identityHashCode: number;
    // private ref: WeakReference<ClassLoader>;
    temporaryStrongRef: ClassLoader | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}