import type { TruffleLogger } from '../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ShadowStack$ThreadLocalStack } from '../../../../../com/oracle/truffle/tools/profiler/ShadowStack$ThreadLocalStack.d.ts'
import type { StackTraceEntry } from '../../../../../com/oracle/truffle/tools/profiler/StackTraceEntry.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShadowStack extends Object {
    constructor(stackLimit: number, sourceSectionFilter: SourceSectionFilter, instrumenter: Instrumenter, logger: TruffleLogger)
    // private initInstrumenter: Instrumenter;
    // private logger: TruffleLogger;
    // private sourceSectionFilter: SourceSectionFilter;
    // private stackLimit: number;
    // private stacks: Map<Thread, ShadowStack$ThreadLocalStack>;
    getInitialStack(instrumentedNode: Node): StackTraceEntry[];
    getStack(thread: Thread): ShadowStack$ThreadLocalStack;
    getStacks(): ShadowStack$ThreadLocalStack[];
    install(instrumenter: Instrumenter, filter: SourceSectionFilter, compiledOnly: boolean): EventBinding<Object>;
}