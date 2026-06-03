import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { AtomicReferenceArray } from '../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { AtomicReferenceFieldUpdater } from '../../../java/util/concurrent/atomic/AtomicReferenceFieldUpdater.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentLinkedListKt extends Object {
    static close(paramarg0: Object | null): Object | null;
    static findSegmentAndMoveForward$atomicfu$ATOMIC_ARRAY$Any(paramarg0: AtomicReferenceArray<Object>, paramarg1: number, paramarg2: number, paramarg3: Object | null, paramarg4: (param0: Object | null, param1: Object | null) => Object | null): Object;
    static findSegmentAndMoveForward$atomicfu$ATOMIC_FIELD_UPDATER$Any(paramarg0: AtomicReferenceFieldUpdater<Object, Object>, paramarg1: Object, paramarg2: number, paramarg3: Object | null, paramarg4: (param0: Object | null, param1: Object | null) => Object | null): Object;
    static findSegmentAndMoveForward$atomicfu$BOXED_ATOMIC$Any(paramarg0: AtomicReference<Object>, paramarg1: number, paramarg2: Object | null, paramarg3: (param0: Object | null, param1: Object | null) => Object | null): Object;
    static findSegmentInternal(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null, param1: Object | null) => Object | null): Object;
    static moveForward$atomicfu$ATOMIC_ARRAY$Any(paramarg0: AtomicReferenceArray<Object>, paramarg1: number, paramarg2: Object | null): boolean;
    static moveForward$atomicfu$ATOMIC_FIELD_UPDATER$Any(paramarg0: AtomicReferenceFieldUpdater<Object, Object>, paramarg1: Object, paramarg2: Object | null): boolean;
    static moveForward$atomicfu$BOXED_ATOMIC$Any(paramarg0: AtomicReference<Object>, paramarg1: Object | null): boolean;
}