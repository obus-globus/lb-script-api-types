import type { AtomicInteger } from '../../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../../java/lang/Cloneable.d.ts'
export class SharedObject extends Object implements Cloneable {
    constructor()
    readonly refCount: AtomicInteger;
    addRef(): void;
    protected clone(): Object;
    clone(): SharedObject;
    deleteIfZeroRefCount(): void;
    getRefCount(): number;
    removeRef(): void;
}