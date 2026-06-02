import type { Cleaner$Cleanable } from '../../../../com/sun/jna/internal/Cleaner$Cleanable.d.ts'
import type { Cleaner$CleanerRef } from '../../../../com/sun/jna/internal/Cleaner$CleanerRef.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Cleaner extends Object {
    static getCleaner(): Cleaner;
    private constructor()
    // private cleanerThread: Thread;
    // private firstCleanable: Cleaner$CleanerRef;
    // private referenceQueue: ReferenceQueue<Object>;
    // private add(arg0: Cleaner$CleanerRef): Cleaner$CleanerRef;
    register(arg0: Object, arg1: () => void): Cleaner$Cleanable;
    // private remove(arg0: Cleaner$CleanerRef): boolean;
}