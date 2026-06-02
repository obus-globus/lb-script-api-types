import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FastThreadLocalRunnable extends Object implements Runnable {
    private constructor(arg0: () => void)
    // private runnable: () => void;
    run(): void;
}