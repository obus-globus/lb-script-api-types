import type { Class } from '../../../../java/lang/Class.d.ts'
import type { PhantomReference } from '../../../../java/lang/ref/PhantomReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FinalizableReferenceQueue$FinalizerStarter extends Object{
    startFinalizer(finalizableReferenceClass: Class<Object>, queue: ReferenceQueue<Object>, frqRef: PhantomReference<Object>): void;
}