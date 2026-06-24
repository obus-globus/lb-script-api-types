import type { FinalizableReferenceQueue$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { FinalizableReferenceQueue$FinalizerStarter } from '../../../../com/google/common/base/FinalizableReferenceQueue$FinalizerStarter.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { PhantomReference } from '../../../../java/lang/ref/PhantomReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FinalizableReferenceQueue$DirectStarter extends Object implements FinalizableReferenceQueue$FinalizerStarter {
    private constructor()
    constructor(arg0: FinalizableReferenceQueue$1)
    startFinalizer(finalizableReferenceClass: Class<Object>, queue: ReferenceQueue<Object>, frqRef: PhantomReference<Object>): void;
}