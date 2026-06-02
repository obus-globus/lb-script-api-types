import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface Functions$FailableRunnable<T extends Throwable> extends Object{
    run(): void;
}