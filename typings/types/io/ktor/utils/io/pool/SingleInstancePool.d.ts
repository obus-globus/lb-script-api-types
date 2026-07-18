import type { ObjectPool } from '../../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SingleInstancePool<T extends unknown> extends Object implements ObjectPool<T> {
    constructor()
    readonly capacity: number;
    borrow(): T;
    close(): void;
    dispose(): void;
    protected disposeInstance(instance: T): void;
    protected produceInstance(): T;
    recycle(instance: T): void;
}