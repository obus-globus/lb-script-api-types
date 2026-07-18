import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ObjectPool<T extends unknown> extends AutoCloseable, Object{
    readonly capacity: number;
    borrow(): T;
    close(): void;
    dispose(): void;
    recycle(instance: T): void;
}