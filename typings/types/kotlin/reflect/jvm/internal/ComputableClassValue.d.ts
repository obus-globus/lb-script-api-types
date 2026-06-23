import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassValue } from '../../../../java/lang/ClassValue.d.ts'
import type { SoftReference } from '../../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ComputableClassValue<V extends unknown> extends ClassValue<SoftReference<V>> {
    constructor(compute: (param0: Class<Object>) => V)
    compute: (param0: Class<Object>) => V;
    protected computeValue(type: Class<Object>): SoftReference<V>;
    createNewCopy(): ComputableClassValue<V>;
}