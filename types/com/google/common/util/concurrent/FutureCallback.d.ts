import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FutureCallback<V extends Object | number | string | boolean> extends Object{
    onFailure(t: Throwable): void;
    onSuccess(result: V): void;
}