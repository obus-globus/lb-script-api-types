import type { ObjectPool } from '../../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class NoPoolImpl<T extends unknown> extends Object implements ObjectPool<T> {
    constructor()
    readonly capacity: number;
    close(): void;
    dispose(): void;
    recycle(instance: T): void;
}