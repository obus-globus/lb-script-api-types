import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CloseableConsumer extends Object{
    accept(arg0: Closeable): void;
}