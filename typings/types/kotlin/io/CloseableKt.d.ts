import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class CloseableKt extends Object {
    static closeFinally(self: Closeable | null, cause: Throwable | null): void;
}