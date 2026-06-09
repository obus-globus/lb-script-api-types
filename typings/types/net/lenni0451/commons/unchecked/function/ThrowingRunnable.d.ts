import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ThrowingRunnable extends Object {
    run(): void;
    toRunnable(): () => void;
    tryRun(): void;
}