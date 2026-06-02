import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { ConnectionWatcher } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/ConnectionWatcher.d.ts'
import type { InspectServerSession } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession.d.ts'
import type { InspectorServer$InspectWebSocketHandler } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServer$InspectWebSocketHandler.d.ts'
import type { AtomicBoolean } from '../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicReference } from '../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectorServer$ServerPathSession extends Object {
    constructor(context: InspectorExecutionContext, serverSession: InspectServerSession, debugBrk: boolean, connectionWatcher: ConnectionWatcher, pathContainingToken: string)
    // private activeWS: InspectorServer$InspectWebSocketHandler;
    // private connectionWatcher: ConnectionWatcher;
    // private context: InspectorExecutionContext;
    // private debugBrk: AtomicBoolean;
    // private pathContainingToken: string;
    // private serverSession: AtomicReference<InspectServerSession>;
    dispose(): void;
    getConnectionWatcher(): ConnectionWatcher;
    getContext(): InspectorExecutionContext;
    getDebugBrkAndReset(): boolean;
    getServerSession(): InspectServerSession;
}