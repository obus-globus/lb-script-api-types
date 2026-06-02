import type { ClassValue } from '../../java/lang/ClassValue.d.ts'
import type { ClassValue$Version } from '../../java/lang/ClassValue$Version.d.ts'
import type { WeakReference } from '../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ClassValue$Entry<T extends Object | number | string | boolean> extends Object {
    constructor(arg0: ClassValue$Version<T>, arg1: T)
    // private value: T;
    // private version: WeakReference<ClassValue$Version<T>>;
    classValueOrNull(): ClassValue<T>;
    isLive(): boolean;
    refreshVersion(arg0: ClassValue$Version<T>): ClassValue$Entry<T>;
    version(): ClassValue$Version<T>;
}