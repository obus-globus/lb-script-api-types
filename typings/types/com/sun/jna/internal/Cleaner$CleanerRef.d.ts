import type { Cleaner } from '../../../../com/sun/jna/internal/Cleaner.d.ts'
import type { Cleaner$Cleanable } from '../../../../com/sun/jna/internal/Cleaner$Cleanable.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { PhantomReference } from '../../../../java/lang/ref/PhantomReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Cleaner$CleanerRef extends PhantomReference<Object> implements Cleaner$Cleanable {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: Cleaner, arg1: Object, arg2: ReferenceQueue<Object>, arg3: () => void)
    // private cleaner: Cleaner;
    // private cleanupTask: () => void;
    // private next: Cleaner$CleanerRef;
    // private previous: Cleaner$CleanerRef;
    clean(): void;
    getNext(): Cleaner$CleanerRef;
    getPrevious(): Cleaner$CleanerRef;
    setNext(arg0: Cleaner$CleanerRef): void;
    setPrevious(arg0: Cleaner$CleanerRef): void;
}