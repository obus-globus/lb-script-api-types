import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IORunnable extends Object{
    asRunnable(): () => void;
    run(): void;
}