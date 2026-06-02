import type { WeakReference } from '../../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FinalizationRecord extends Object {
    constructor(weakRefTarget: WeakReference<Object>, heldValue: Object, unregisterToken: Object)
    readonly heldValue: Object;
    readonly unregisterToken: WeakReference<Object>;
    readonly weakRefTarget: WeakReference<Object>;
    getHeldValue(): Object;
    getUnregisterToken(): WeakReference<Object>;
    getWeakRefTarget(): WeakReference<Object>;
}