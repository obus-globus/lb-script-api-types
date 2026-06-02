import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
export interface UpdateReceiver extends Object{
    lithium$invalidateCacheOnNeighborUpdate(arg0: boolean): void;
    lithium$invalidateCacheOnNeighborUpdate(arg0: Direction): void;
    lithium$invalidateCacheOnUndirectedNeighborUpdate(): void;
}