import type { ObjectPool } from '../../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { AtomicReferenceArray } from '../../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DefaultPool<T extends unknown> extends Object implements ObjectPool<T> {
    constructor(capacity: number)
    readonly capacity: number;
    // private instances: AtomicReferenceArray<T>;
    // private maxIndex: number;
    // private next: number[];
    // private shift: number;
    borrow(): T;
    protected clearInstance(instance: T): T;
    close(): void;
    dispose(): void;
    protected disposeInstance(instance: T): void;
    // private popTop(): number;
    protected produceInstance(): T;
    // private pushTop(index: number): void;
    recycle(instance: T): void;
    // private tryPop(): T | null;
    // private tryPush(instance: T): boolean;
    protected validateInstance(instance: T): void;
}