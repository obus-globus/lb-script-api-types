import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class RunningOnDifferentThreadException extends RuntimeException {
    static RUNNING_ON_DIFFERENT_THREAD: RunningOnDifferentThreadException;
    private constructor()
    fillInStackTrace(): Throwable;
}