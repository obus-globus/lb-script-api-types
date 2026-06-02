import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassValue } from '../../../../java/lang/ClassValue.d.ts'
import type { SoftReference } from '../../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
export class ComputableClassValue<V extends Object | number | string | boolean> extends ClassValue<SoftReference<V>> {
    constructor(compute: Function1<Class<Object>, V>)
    compute: (param0: Class<Object>) => V;
    protected computeValue(type: Class<Object>): SoftReference<V>;
    createNewCopy(): ComputableClassValue<V>;
}