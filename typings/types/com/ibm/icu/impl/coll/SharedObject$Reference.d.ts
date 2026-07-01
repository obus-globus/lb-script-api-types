import type { SharedObject } from '../../../../../com/ibm/icu/impl/coll/SharedObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class SharedObject$Reference<T extends SharedObject> extends Object implements Cloneable {
    constructor(arg0: T)
    // private ref: T;
    clear(): void;
    clone(): SharedObject$Reference<T>;
    copyOnWrite(): T;
    finalize(): void;
    readOnly(): T;
}