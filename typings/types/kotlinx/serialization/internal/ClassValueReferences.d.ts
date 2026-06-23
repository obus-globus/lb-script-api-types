import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassValue } from '../../../java/lang/ClassValue.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MutableSoftReference } from '../../../kotlinx/serialization/internal/MutableSoftReference.d.ts'
export class ClassValueReferences<T extends unknown> extends ClassValue<MutableSoftReference<T>> {
    constructor()
    protected computeValue(type: Class<Object>): MutableSoftReference<T>;
    getOrSet(key: Class<Object>, factory: () => T): T;
    isStored(key: Class<Object>): boolean;
}