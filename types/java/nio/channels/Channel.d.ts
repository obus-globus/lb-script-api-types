import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Channel extends Closeable, Object{
    close(): void;
    isOpen(): boolean;
}