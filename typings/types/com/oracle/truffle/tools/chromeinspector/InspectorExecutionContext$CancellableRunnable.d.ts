import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InspectorExecutionContext$CancellableRunnable extends Runnable, Object{
    cancel(): void;
}