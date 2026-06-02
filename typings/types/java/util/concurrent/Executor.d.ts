import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Executor extends Object{
    execute(arg0: () => void): void;
}