import type { TruffleContext } from '../../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { DebuggerSession } from '../../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { LoadSourceEvent } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceEvent.d.ts'
import type { LoadSourceListener } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceListener.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { ExecutionContext } from '../../../../../../com/oracle/truffle/tools/dap/server/ExecutionContext.d.ts'
import type { LoadedSourcesHandler$DAPSourceWrapper } from '../../../../../../com/oracle/truffle/tools/dap/server/LoadedSourcesHandler$DAPSourceWrapper.d.ts'
import type { Source as Source_2 } from '../../../../../../com/oracle/truffle/tools/dap/types/Source.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../org/graalvm/collections/Pair.d.ts'
export class LoadedSourcesHandler extends Object implements LoadSourceListener {
    constructor(context: ExecutionContext, debuggerSession: DebuggerSession)
    // private context: ExecutionContext;
    // private debuggerSession: DebuggerSession;
    // private sourceIDs: Map<Source, number>;
    // private sources: LoadedSourcesHandler$DAPSourceWrapper[];
    // private sourcesBacklog: Source[];
    // private sourcesByPath: { [key: string]: Source };
    // private sourcesLock: Object;
    // private toRunOnLoad: { [key: string]: (param0: Source) => void };
    assureLoaded(sourceLoaded: Source): Source_2;
    assureLoaded(sourceLoaded: Source, truffleContext: TruffleContext): Source_2;
    // private from(source: Source, truffleContext: TruffleContext): Source_2;
    getLoadedSources(): Source_2[];
    // private getPath(source: Source, truffleContext: TruffleContext): Pair<string, boolean>;
    getScriptId(source: Source): number;
    getSource(id: number): Source;
    getSource(path: string): Source;
    notifyNewTruffleContext(truffleContext: TruffleContext): void;
    onLoad(event: LoadSourceEvent): void;
    runOnLoad(path: string, task: (param0: Source) => void): void;
}