import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { NotCompleted } from '../../kotlinx/coroutines/NotCompleted.d.ts'
export interface CancelHandler extends Object, NotCompleted{
    invoke(cause: Throwable | null): void;
}