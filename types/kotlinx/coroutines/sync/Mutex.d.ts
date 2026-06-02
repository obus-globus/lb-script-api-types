import type { Object } from '../../../java/lang/Object.d.ts'
import type { SelectClause2 } from '../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
export interface Mutex extends Object{
    /*not mapped: */ isLocked(): boolean;
    readonly onLock: SelectClause2<Object, Mutex>;
    holdsLock(owner: Object): boolean;
    lock(owner: Object | null): void;
    tryLock(owner: Object | null): boolean;
    unlock(owner: Object | null): void;
}