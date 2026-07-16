import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConcurrentHashMultiset<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<E extends unknown>(): E[];
    static create<E extends unknown>(paramelements: E[]): E[];
    static create<E extends unknown>(paramcountMap: Map<E, AtomicInteger>): E[];
}