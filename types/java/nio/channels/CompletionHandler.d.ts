import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface CompletionHandler<V extends Object | number | string | boolean, A extends Object | number | string | boolean> extends Object{
    completed(arg0: V, arg1: A): void;
    failed(arg0: Throwable, arg1: A): void;
}