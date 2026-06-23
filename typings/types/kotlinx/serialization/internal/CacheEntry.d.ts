import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class CacheEntry<T extends unknown> extends Object {
    constructor(serializer: KSerializer<T> | null)
    serializer: KSerializer<T> | null;
}