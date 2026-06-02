import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cancellable } from '../../../../../../org/apache/logging/log4j/core/util/Cancellable.d.ts'
export interface ShutdownCallbackRegistry extends Object{
    addShutdownCallback(callback: () => void): Cancellable;
}