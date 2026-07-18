import type { AtomicOp } from '../../../../io/ktor/util/internal/AtomicOp.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AtomicDesc extends Object {
    constructor()
    complete(op: AtomicOp<Object>, failure: Object | null): void;
    prepare(op: AtomicOp<Object>): Object | null;
}