import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export interface CopyableThrowable<T extends Throwable & CopyableThrowable<T>> extends Object{
    createCopy(): T | null;
}