import type { InspectorExecutionContext$Listener } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext$Listener.d.ts'
import type { InspectorRuntime } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorRuntime.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InspectorRuntime$ContextListener extends Object implements InspectorExecutionContext$Listener {
    private constructor(null_: InspectorRuntime)
    contextCreated(id: number, name: string): void;
    contextDestroyed(id: number, name: string): void;
}