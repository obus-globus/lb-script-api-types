import type { ExecutionException } from '../../../../../java/util/concurrent/ExecutionException.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
import type { ConcurrentInitializer } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentInitializer.d.ts'
import type { ConcurrentRuntimeException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentRuntimeException.d.ts'
export class ConcurrentUtils extends Object {
    static constantFuture(paramarg0: Object | null): Future<Object>;
    static createIfAbsent(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: ConcurrentInitializer<Object>): Object | null;
    static createIfAbsentUnchecked(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: ConcurrentInitializer<Object>): Object | null;
    static extractCause(paramarg0: ExecutionException): ConcurrentException;
    static extractCauseUnchecked(paramarg0: ExecutionException): ConcurrentRuntimeException;
    static handleCause(paramarg0: ExecutionException): void;
    static handleCauseUnchecked(paramarg0: ExecutionException): void;
    static initialize(paramarg0: ConcurrentInitializer<Object>): Object | null;
    static initializeUnchecked(paramarg0: ConcurrentInitializer<Object>): Object | null;
    static putIfAbsent(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    private constructor()
}