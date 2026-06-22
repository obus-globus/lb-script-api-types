import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AbstractEventExecutor$LazyRunnable extends Runnable, Object{
    run(): void;
}