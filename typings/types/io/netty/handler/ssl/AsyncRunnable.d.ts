import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AsyncRunnable extends Runnable, Object {
    run(arg0: () => void): void;
    run(): void;
}