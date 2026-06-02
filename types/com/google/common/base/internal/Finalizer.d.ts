import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { PhantomReference } from '../../../../../java/lang/ref/PhantomReference.d.ts'
import type { Reference } from '../../../../../java/lang/ref/Reference.d.ts'
import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Finalizer extends Object implements Runnable {
    static startFinalizer(paramfinalizableReferenceClass: Class<Object>, paramqueue: ReferenceQueue<Object>, paramfrqReference: PhantomReference<Object>): void;
    private constructor(finalizableReferenceClass: Class<Object>, queue: ReferenceQueue<Object>, frqReference: PhantomReference<Object>)
    // private finalizableReferenceClassReference: WeakReference<Class<Object>>;
    // private frqReference: PhantomReference<Object>;
    // private queue: ReferenceQueue<Object>;
    // private cleanUp(firstReference: Reference<Object>): boolean;
    // private finalizeReference(reference: Reference<Object>, finalizeReferentMethod: Method): boolean;
    // private getFinalizeReferentMethod(): Method;
    run(): void;
}