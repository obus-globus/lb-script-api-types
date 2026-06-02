import type { LocalCache$LoadingValueReference } from '../../../../com/google/common/cache/LocalCache$LoadingValueReference.d.ts'
import type { LocalCache$ValueReference } from '../../../../com/google/common/cache/LocalCache$ValueReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$ComputingValueReference<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends LocalCache$LoadingValueReference<K, V> {
    constructor(oldValue: LocalCache$ValueReference<K, V>)
    isLoading(): boolean;
}