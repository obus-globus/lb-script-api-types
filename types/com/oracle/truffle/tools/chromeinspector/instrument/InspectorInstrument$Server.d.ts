import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { InspectorWSConnection } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/InspectorWSConnection.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/Token.d.ts'
import type { ConnectionWatcher } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/ConnectionWatcher.d.ts'
import type { InspectorServerConnection } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServerConnection.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectorInstrument$Server extends Object {
    constructor(env: TruffleInstrument$Env, contextName: string, port: number, debugBreak: boolean, waitAttached: boolean, hideErrors: boolean, inspectInternal: boolean, inspectInitialization: boolean, pathOrNull: string, sourcePath: URI[], suspensionTimeout: number, connectionWatcher: ConnectionWatcher)
    // private executionContext: InspectorExecutionContext;
    // private token: Token;
    // private urlContainingToken: string;
    // private wss: InspectorWSConnection;
    close(): void;
    doFinalize(): void;
    getConnection(): InspectorServerConnection;
}