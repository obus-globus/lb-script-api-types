import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export interface LockBasedStorageManager$ExceptionHandlingStrategy extends Object{
    handleException(arg0: Throwable): RuntimeException;
}