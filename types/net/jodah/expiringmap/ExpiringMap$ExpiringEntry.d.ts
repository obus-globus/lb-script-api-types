import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { ExpirationPolicy } from '../../../net/jodah/expiringmap/ExpirationPolicy.d.ts'
export class ExpiringMap$ExpiringEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Comparable<ExpiringMap$ExpiringEntry<K, V>> {
    constructor(arg0: K, arg1: V, arg2: AtomicReference<ExpirationPolicy>, arg3: AtomicLong)
    // private entryFuture: Future<Object>;
    // private expectedExpiration: AtomicLong;
    // private expirationNanos: AtomicLong;
    // private expirationPolicy: AtomicReference<ExpirationPolicy>;
    // private key: K;
    // private scheduled: boolean;
    // private value: V;
    cancel(): boolean;
    compareTo(arg0: ExpiringMap$ExpiringEntry<K, V>): number;
    equals(arg0: Object | null): boolean;
    getValue(): V;
    hashCode(): number;
    resetExpiration(): void;
    schedule(arg0: Future<Object>): void;
    setValue(arg0: V): void;
    toString(): string;
}