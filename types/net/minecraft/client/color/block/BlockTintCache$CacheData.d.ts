import type { ReentrantReadWriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlockTintCache$CacheData extends Object {
    private constructor()
    // private cache: Int2ObjectArrayMap<number[]>;
    readonly invalidated: boolean;
    // private lock: ReentrantReadWriteLock;
    // private allocateLayer(): number[];
    getLayer(y: number): number[];
    invalidate(): void;
    isInvalidated(): boolean;
}