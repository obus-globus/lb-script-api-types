import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { PhantomReference } from '../../../../java/lang/ref/PhantomReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FinalizableReferenceQueue extends Object implements Closeable {
    constructor()
    // private frqRef: PhantomReference<Object>;
    // private queue: ReferenceQueue<Object>;
    // private threadStarted: boolean;
    cleanUp(): void;
    close(): void;
}