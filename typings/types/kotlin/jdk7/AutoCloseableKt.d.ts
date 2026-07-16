import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class AutoCloseableKt extends Object {
    static closeFinally(self: AutoCloseable | null, cause: Throwable | null): void;
}