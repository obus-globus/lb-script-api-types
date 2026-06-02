import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface LoadErrorHandler extends Object{
    handleLoadError(arg0: string, arg1: Throwable): void;
}