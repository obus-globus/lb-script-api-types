import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RejectedExecutionHandler extends Object{
    rejected(arg0: () => void, arg1: (Object | null)[]): void;
}