import type { RemovalNotification } from '../../../../com/google/common/cache/RemovalNotification.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RemovalListener<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    onRemoval(notification: RemovalNotification<K, V>): void;
}