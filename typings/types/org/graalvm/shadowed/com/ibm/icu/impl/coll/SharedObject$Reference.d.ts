import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../../java/lang/Cloneable.d.ts'
import type { SharedObject } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/SharedObject.d.ts'
export class SharedObject$Reference<T extends SharedObject> extends Object implements Cloneable {
    constructor(r: T)
    // private ref: T;
    clear(): void;
    clone(): SharedObject$Reference<T>;
    copyOnWrite(): T;
    finalize(): void;
    readOnly(): T;
}