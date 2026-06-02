import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { ContextsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ContextsListener.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { LoadSourceEvent } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceEvent.d.ts'
import type { LoadSourceListener } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceListener.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { ScriptsHandler$LoadScriptListener } from '../../../../../com/oracle/truffle/tools/chromeinspector/ScriptsHandler$LoadScriptListener.d.ts'
import type { Script } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/Script.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ScriptsHandler extends Object implements LoadSourceListener {
    constructor(env: TruffleInstrument$Env, reportInternal: boolean)
    // private contexts: TruffleContext[];
    // private contextsBinding: EventBinding<ContextsListener>;
    // private debuggerSession: DebuggerSession;
    // private env: TruffleInstrument$Env;
    // private listeners: ScriptsHandler$LoadScriptListener[];
    // private reportInternal: boolean;
    readonly scripts: Script[];
    // private sourceIDs: Map<Source, number>;
    // private sourcesBacklog: Source[];
    // private uniqueSourceNames: { [key: string]: number };
    addLoadScriptListener(listener: ScriptsHandler$LoadScriptListener): void;
    assureLoaded(sourceLoaded: Source): Script;
    // private assureLoaded(sourceLoaded: Source, truffleContext: TruffleContext): Script;
    dispose(): void;
    // private getATruffleContext(): TruffleContext;
    getDebuggerSession(): DebuggerSession;
    getScript(id: number): Script;
    getScriptId(source: Source): number;
    getScripts(): Script[];
    getSourceURL(source: Source): string;
    // private getSourceURL(source: Source, truffleContext: TruffleContext): string;
    onLoad(event: LoadSourceEvent): void;
    removeLoadScriptListener(listener: ScriptsHandler$LoadScriptListener): void;
    setDebuggerSession(debuggerSession: DebuggerSession): void;
}