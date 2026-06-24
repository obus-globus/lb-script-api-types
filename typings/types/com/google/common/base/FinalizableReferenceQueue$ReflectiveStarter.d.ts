import type { FinalizableReferenceQueue$FinalizerStarter } from '../../../../com/google/common/base/FinalizableReferenceQueue$FinalizerStarter.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { PhantomReference } from '../../../../java/lang/ref/PhantomReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FinalizableReferenceQueue$ReflectiveStarter extends Object implements FinalizableReferenceQueue$FinalizerStarter {
    constructor(startFinalizer: Method)
    // private startFinalizer: Method;
    startFinalizer(finalizableReferenceClass: Class<Object>, queue: ReferenceQueue<Object>, frqRef: PhantomReference<Object>): void;
}