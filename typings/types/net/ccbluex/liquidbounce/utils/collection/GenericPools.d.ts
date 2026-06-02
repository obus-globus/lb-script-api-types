import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pool } from '../../../../../net/ccbluex/fastutil/Pool.d.ts'
export class GenericPools extends Object {
    static ARRAY_LIST: Pool<(Object | null)[]>;
    static HASH_MAP: Pool<Map<Object | null, Object | null>>;
    static HASH_SET: Pool<(Object | null)[]>;
    private constructor()
}