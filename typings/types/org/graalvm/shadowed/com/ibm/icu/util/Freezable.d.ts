import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
export interface Freezable<T extends unknown> extends Object, Cloneable{
    protected clone(): Object;
    cloneAsThawed(): T;
    freeze(): T;
    isFrozen(): boolean;
}