import type { OpDescriptor } from '../../../../io/ktor/util/internal/OpDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AtomicOp<T extends unknown> extends OpDescriptor {
    constructor()
    /*not mapped: */ isDecided(): boolean;
    complete(affected: T, failure: Object | null): void;
    // private decide(decision: Object | null): Object | null;
    perform(affected: Object | null): Object | null;
    prepare(affected: T): Object | null;
    tryDecide(decision: Object | null): boolean;
}