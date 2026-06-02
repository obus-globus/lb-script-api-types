import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GpuFence extends AutoCloseable, Object{
    awaitCompletion(timeoutMs: number): boolean;
    close(): void;
}