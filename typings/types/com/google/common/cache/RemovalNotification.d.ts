import type { RemovalCause } from '../../../../com/google/common/cache/RemovalCause.d.ts'
import type { AbstractMap$SimpleImmutableEntry } from '../../../../java/util/AbstractMap$SimpleImmutableEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RemovalNotification<K extends unknown, V extends unknown> extends AbstractMap$SimpleImmutableEntry<K, V> {
    static create(paramkey: Object | null, paramvalue: Object | null, paramcause: RemovalCause): RemovalNotification<Object, Object>;
    private constructor(key: K, value: V, cause: RemovalCause)
    readonly cause: RemovalCause;
    getCause(): RemovalCause;
    wasEvicted(): boolean;
}