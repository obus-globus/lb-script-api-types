import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Profiler$Scope extends AutoCloseable, Object{
    close(): void;
}