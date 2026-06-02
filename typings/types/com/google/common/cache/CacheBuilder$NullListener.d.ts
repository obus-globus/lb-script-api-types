import type { RemovalListener } from '../../../../com/google/common/cache/RemovalListener.d.ts'
import type { RemovalNotification } from '../../../../com/google/common/cache/RemovalNotification.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CacheBuilder$NullListener extends Enum<CacheBuilder$NullListener> implements RemovalListener<Object, Object> {
    static INSTANCE: CacheBuilder$NullListener;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CacheBuilder$NullListener;
    static values(): (Object | null)[];
    private constructor()
    onRemoval(notification: RemovalNotification<Object, Object>): void;
    name(): "INSTANCE";
}