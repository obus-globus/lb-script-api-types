import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LoggerAdapter<L extends Object | number | string | boolean> extends Closeable, Object{
    getLogger(name: string): L;
}