import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ExecutionException } from '../../../../../java/util/concurrent/ExecutionException.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
import type { ConcurrentInitializer } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentInitializer.d.ts'
import type { ConcurrentRuntimeException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentRuntimeException.d.ts'
export class ConcurrentUtils extends Object {
    static constantFuture<T extends unknown>(paramarg0: T): Future<T>;
    static createIfAbsent<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>, paramarg1: K, paramarg2: ConcurrentInitializer<V>): V;
    static createIfAbsentUnchecked<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>, paramarg1: K, paramarg2: ConcurrentInitializer<V>): V;
    static extractCause(paramarg0: ExecutionException): ConcurrentException;
    static extractCauseUnchecked(paramarg0: ExecutionException): ConcurrentRuntimeException;
    static handleCause(paramarg0: ExecutionException): void;
    static handleCauseUnchecked(paramarg0: ExecutionException): void;
    static initialize<T extends unknown>(paramarg0: ConcurrentInitializer<T>): T;
    static initializeUnchecked<T extends unknown>(paramarg0: ConcurrentInitializer<T>): T;
    static putIfAbsent<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>, paramarg1: K, paramarg2: V): V;
    private constructor()
}