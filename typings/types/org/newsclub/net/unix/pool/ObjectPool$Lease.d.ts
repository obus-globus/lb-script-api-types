import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ObjectPool$Lease<O extends Object | number | string | boolean> extends Closeable, Object{
    close(): void;
    discard(): void;
    get(): O;
}