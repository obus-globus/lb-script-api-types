import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { AtomicReferenceArray } from '../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { AtomicReferenceFieldUpdater } from '../../../java/util/concurrent/atomic/AtomicReferenceFieldUpdater.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ConcurrentLinkedListNode } from '../../../kotlinx/coroutines/internal/ConcurrentLinkedListNode.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class ConcurrentLinkedListKt extends Object {
    static close<N extends ConcurrentLinkedListNode<N>>(paramarg0: N): N;
    static findSegmentAndMoveForward$atomicfu$ATOMIC_ARRAY$Any<S extends Segment<S>>(paramarg0: AtomicReferenceArray<Object>, paramarg1: number, paramarg2: number, paramarg3: S, paramarg4: (param0: Object, param1: Object) => S): Object;
    static findSegmentAndMoveForward$atomicfu$ATOMIC_FIELD_UPDATER$Any<S extends Segment<S>>(paramarg0: AtomicReferenceFieldUpdater<Object, Object>, paramarg1: Object, paramarg2: number, paramarg3: S, paramarg4: (param0: Object, param1: Object) => S): Object;
    static findSegmentAndMoveForward$atomicfu$BOXED_ATOMIC$Any<S extends Segment<S>>(paramarg0: AtomicReference<Object>, paramarg1: number, paramarg2: S, paramarg3: (param0: Object, param1: Object) => S): Object;
    static findSegmentInternal<S extends Segment<S>>(paramarg0: S, paramarg1: number, paramarg2: (param0: Object, param1: Object) => S): Object;
    static moveForward$atomicfu$ATOMIC_ARRAY$Any<S extends Segment<S>>(paramarg0: AtomicReferenceArray<Object>, paramarg1: number, paramarg2: S): boolean;
    static moveForward$atomicfu$ATOMIC_FIELD_UPDATER$Any<S extends Segment<S>>(paramarg0: AtomicReferenceFieldUpdater<Object, Object>, paramarg1: Object, paramarg2: S): boolean;
    static moveForward$atomicfu$BOXED_ATOMIC$Any<S extends Segment<S>>(paramarg0: AtomicReference<Object>, paramarg1: S): boolean;
}