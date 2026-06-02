import type { LocalCache$StrongValueReference } from '../../../../com/google/common/cache/LocalCache$StrongValueReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$WeightedStrongValueReference<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends LocalCache$StrongValueReference<K, V> {
    constructor(referent: V, weight: number)
    readonly weight: number;
    getWeight(): number;
}