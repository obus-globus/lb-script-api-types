import type { InspectorExecutionContext$CancellableRunnable } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext$CancellableRunnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InspectorExecutionContext$SuspendedThreadExecutor extends Object{
    execute(run: InspectorExecutionContext$CancellableRunnable): void;
}