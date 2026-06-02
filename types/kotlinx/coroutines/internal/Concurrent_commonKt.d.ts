import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
export class Concurrent_commonKt extends Object {
    static getValue(paramarg0: AtomicReference<Object>): Object | null;
    static loop(paramarg0: AtomicReference<Object>, paramarg1: Function2<Object, Object, void>): void;
    static setValue(paramarg0: AtomicReference<Object>, paramarg1: Object | null): void;
}