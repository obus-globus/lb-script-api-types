import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LoggerAdapter<L extends unknown> extends Closeable, Object{
    close(): void;
    getLogger(name: string): L;
}