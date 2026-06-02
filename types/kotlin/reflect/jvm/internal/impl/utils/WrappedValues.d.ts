import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class WrappedValues extends Object {
    static throwWrappedProcessCanceledException: boolean;
    static escapeNull(paramarg0: Object | null): Object;
    static escapeThrowable(paramarg0: Throwable): Object;
    static unescapeExceptionOrNull(paramarg0: Object): Object | null;
    static unescapeNull(paramarg0: Object): Object | null;
    static unescapeThrowable(paramarg0: Object): Object | null;
}