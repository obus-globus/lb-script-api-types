import type { Weigher } from '../../../../com/google/common/cache/Weigher.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CacheBuilder$OneWeigher extends Enum<CacheBuilder$OneWeigher> implements Weigher<Object, Object> {
    static INSTANCE: CacheBuilder$OneWeigher;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CacheBuilder$OneWeigher;
    static values(): CacheBuilder$OneWeigher[];
    private constructor()
    weigh(key: Object, value: Object): number;
    name(): "INSTANCE";
}