import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class WrappedValues extends Object {
    static throwWrappedProcessCanceledException: boolean;
    static escapeNull<V extends unknown>(paramarg0: V): Object;
    static escapeThrowable(paramarg0: Throwable): Object;
    static unescapeExceptionOrNull<V extends unknown>(paramarg0: Object): V;
    static unescapeNull<V extends unknown>(paramarg0: Object): V;
    static unescapeThrowable<V extends unknown>(paramarg0: Object): V;
}